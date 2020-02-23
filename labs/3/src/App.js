import React from 'react';
//import './App.css';
import Card from "./components/Card";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Card content="This is a card!"></Card>
        </header>
      </div> 
    );
  }
}

export default App;
