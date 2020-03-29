//import Elements 
import React from "react";
import "./index.css";
import {View, Text} from "react-native";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: []
    };
  }

  componentDidMount() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
     
      this.setState({
        periods: periods
      });
    })
    .catch((error) => {console.log(error)} );
  }

  render() {
    return(
      <View>
        {
            this.state.periods.map((value, index) => {
                return <View key={index}>
                    <Text>Temperature {value.temperature}{value.temperatureUnit}</Text>
                    <Text>{value.detailedForecast}</Text>
                    </View>;
            })
        }
      </View>
    );
  }
}

export default Weather;

/* 
<h3>{this.props.name}</h3> 
<h3>{this.props.temperature}</h3>
<h3>{this.props.temperatureUnit}</h3>
<p>{this.props.detailedForcast}</p>

render() {
  return(
    <View>
    {
       this.state.periods.map((value, index) => {
         return <View key={index}>
           <Text>Temperature {value.temperature}{value.temperatureUnit}</Text>
           <Text>{value.detailedForecast}</Text>
         </View>;
        })
    }
  </View>
   );
}
*/