import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props){
  return (<p>My name is {props.name}</p>);
}

class App extends React.Component {
  clickhandler = () => {
    alert("clicked" + this);
  }
  render() { //react.components have to have a render method that returns an expression or value defined by jsx
  return (
    <div className="App">
      <header className="App-header">
        <div onClick = {this.clickhandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Jenny Rules!</p>
        <NameBadge name ="Jenny"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}}

export default App;
