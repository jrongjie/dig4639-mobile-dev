import React from "react";
import ContactProfile from "../ContactProfile";
import AddContact from "../AddContact";
import RemoveContact from "../RemoveContact";

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  componentDidMount() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "gardner"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }

  render() {
    return (
      <div>
        <h2>Contact List</h2>
        {this.state.contacts.map((value, index) => {
          return <p key={index}>{value.name} , {value.number}</p>;
        })
        }
      </div>
    );
  }
}

export default Contacts;