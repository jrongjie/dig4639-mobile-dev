import React from "react";
import Weather from "../Weather";
import data from "../../data.json";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: data.cards};
  }

  remove = (event) => {
    let datatitle = event.target.getAttribute("datatitle");
    let localCards = this.state.cards;
    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    this.setState({cards: changedCards});
  }

  render() {
    return(
      <div>
          {this.state.cards.map((card, index) => {
            return <Weather 
                key={index}
                title={card.title} 
                content={card.content}/>
            })
          }
      </div>
    );
  }
}

export default CardList;

/*
<h3>{this.props.name}</h3> 
<h3>{this.props.temperature}</h3>
<h3>{this.props.temperatureUnit}</h3>
<p>{this.props.detailedForcast}</p> 
*/