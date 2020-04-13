import React from "react";
import Contacts from "./components/Contacts"

//Create at least one component (React) or screen/component (React Native) for each major action the API provides:
  //See all current contacts (/contacts)
  //Add a new contact (/contacts/add)
  //Remove a specific contact by position (/contacts/remove)
  //See the current name and contacts length (/profile)
  //All components can be on the same long page but must update dynamically if the list of contacts changes through accessing the adding or removing functionality.

//All communication with the server MUST use window.fetch with a header defined as "API" and use the student's last name.

class App extends React.Component {

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
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
       <Contacts/>
      </div>
    );
  }
}

export default App;