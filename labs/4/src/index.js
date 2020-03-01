import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import reference to the Card Class
//import Card from "./components/Card/index.js";

ReactDOM.render(<App />, document.getElementById('root'));

/*
function runOnLoad(){    
    // Create a container for us    
    let element = document.createElement("div");    
    element.id = "container";    

    document.body.appendChild(element);    
    let newTask = new Card({
        content:"Sample value provided"
        //<h3>This is a title</h3>
        //<p>This is the content<p>
    });    
    
    //element.appendChild(newTask.render());
}
    
    window.addEventListener ("DOMContentLoaded", runOnLoad);
*/