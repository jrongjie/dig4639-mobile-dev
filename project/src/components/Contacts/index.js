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
    fetch("http://plato.mrl.ai:8080/contacts", 
    {
      headers: {API: "gardner"}
    })
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
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