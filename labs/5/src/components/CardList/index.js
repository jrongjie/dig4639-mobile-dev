import React from "react";
import WeatherCard from "../WeatherCard/index.js";

class CardList extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      periods: []
    }}
  componentDidMount() {
    fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          periods: result.properties.periods
        })
      })
  }
  render () {
    return (
      <>
        {this.state.periods
          .map((m) => <WeatherCard key={m.number}
            name={m.name}
            temperature={m.temperature}
            temperatureUnit={m.temperatureUnit}
            detailedForecast={m.detailedForecast}
          />)}
      </>
    )}}
    
export default CardList;