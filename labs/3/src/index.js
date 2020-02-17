import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import reference to the Card Class
import Card from "./components/Card/index.js";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


function runOnLoad(){    
    // Create a container for us    
    let element = document.createElement("div");    
    element.id = "container";    

    document.body.appendChild(element);    
    let newTask = new Card({
        content:"Sample value provided"
    });    
    
    element.appendChild(newTask.render());
}
    
    window.addEventListener ("DOMContentLoaded", runOnLoad);