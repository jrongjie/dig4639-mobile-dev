import React from "react";
import ContactProfile from "../ContactProfile";
import AddContact from "../AddContact";
import RemoveContact from "../RemoveContact";

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {contacts: []};
    this.profile = React.createRef();
  }

  conAdded = (name, number) => {
    let newProfile = this.state.contacts;
    let added = {
      name: name,
      number: number
    };
    newProfile.push(added);
    this.setState(newProfile);
    this.profile.current.addToCount();
  }

  conRemoved = (position) => {
    let newProfile = this.state.contacts;
    newProfile.splice(position, 1);
    this.setState(newProfile);
    this.profile.current.removeFromCount();
  }

  componentDidMount() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {
      "method": "GET",
      "headers": {
        "api": "gardner",
        "Content-Type": "application/json",
        "Accept":"application/json"
      }
    }) 
    .then(response => response.json())
    .then((data) => {
      this.setState({
        contacts: data.contacts
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <AddContact onSubmit={this.conAdded}/>
        <ContactProfile ref={this.profile}/>
        {this.state.contacts.map((value, index) => {
            return (
              <div key={index}>
                <p>{value.name}<br/>{value.number}</p>
                <RemoveContact onClick={this.conRemoved} position={index}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Contacts;