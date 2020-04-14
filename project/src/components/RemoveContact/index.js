import React from "react";

const HEADERS ={
  "Method" : "GET",
  "headers" : {
    "API" : "gardner",
    "Content-Type" : "application/json",
    "Accept": "application/json"
  }
}

class RemoveContact extends React.Component {
  constructor(props) {
    super(props);

    this.text = React.createRef();
    this.state = this.state = {
      value: "",
    }
  }
  
  deleteContact = () => {
    let newHeaders = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        position:this.text.current.value,
      })}

    fetch("http://plato.mrl.ai:8080/contacts/remove", newHeaders)
    .then((res) => res.json())
    .then((data) => {
      this.setState({value: this.text.current.value})
      console.log(data)
    }
    , [])
  }

  handleSubmit = e => {
    e.preventDefault();
    this.deleteContact()
  }

  render() {
    return (
      <div className = "card">
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">Position</label>
          <input type="text" ref={this.textInput} id ="position" />
          <br/>
          
          <button type="submit">Submit</button>
        </form>        
      </div>
    );
  }
}
export default RemoveContact;