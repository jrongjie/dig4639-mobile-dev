//import Elements 
import React from "react";
import "./index.css";

class Card extends React.Component {
    
    render(){
        return(
            <div className = "card">
                <h3>{this.props.title}</h3> 
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;

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