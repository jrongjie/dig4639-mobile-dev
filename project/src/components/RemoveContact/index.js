import React from "react";

class RemoveContact extends React.Component {
  constructor(props) {
    super(props);

    this.text = React.createRef();
    this.state = this.state = {
      value: "",
    }
  }
  
  deleteContact = () => {
    window.fetch("http://plato.mrl.ai:8080/contacts/remove", {
      "method": "POST",
      "headers": {
        "api": "gardner",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        position: this.text.current.value,
      })
    })
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Remove contact</h2>

          <label htmlFor="name">Position</label><br/>
          <input type="text" ref={this.textInput} id ="position" />
          <br/>
          
          <button type="submit">Submit</button>
        </form>        
      </div>
    );
  }
}
export default RemoveContact;