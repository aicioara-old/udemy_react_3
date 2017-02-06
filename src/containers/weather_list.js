import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

  renderWeather(cityData, i) {
    const name = cityData.city.name;

    const temps = cityData.list.map(d => d.main.temp);
    const pressures = cityData.list.map(d => d.main.pressure);
    const humidities = cityData.list.map(d => d.main.humidity);

    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={i}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="red" /></td>
        <td><Chart data={pressures} color="blue" /></td>
        <td><Chart data={humidities} color="green" /></td>
      </tr>
    )
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
