import React from "react";

class RemoveContact extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = props.onClick;
    this.state = {position: props.position};
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
        name: this.conName.current.value,
        number: this.conNumber.current.value
      })
    })
    .then(response => response.json())
    .then(() => {
        this.onClick(this.state.position);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <button onClick= {this.deleteContact}>Delete Contact</button>          
      </div>
    );
  }
}
export default RemoveContact;