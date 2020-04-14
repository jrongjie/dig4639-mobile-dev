import React from "react";
import "./styles.css";

class WeatherCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      temperature: 0,
      temperatureUnit: "",
      detailedForecast: ""
    }}

  render () {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <h2>{this.props.temperature} {this.props.temperatureUnit}</h2>
        <p>{this.props.detailedForecast}</p>
      </div>
    )}}

export default WeatherCard;