import React from "react";
import Contacts from "./components/Contacts";

//Create at least one component (React) or screen/component (React Native) for each major action the API provides:
  //See all current contacts (/contacts)
  //Add a new contact (/contacts/add)
  //Remove a specific contact by position (/contacts/remove)
  
  //See the current name and contacts length (/profile)
  
  //All components can be on the same long page but must update dynamically if the list of contacts changes through accessing the adding or removing functionality.

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: 0
    };

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
  }

  componentDidMount() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "gardner"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }

  getValue = (event) => {
    event.preventDefault();
  
    const name = this.nameRef.current.value;
    const number = this.numberRef.current.value;
  
    this.setState({"name": name, "number": number});
  
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getValue}>
          <label for="name">Name</label>
          <input type="text" name="name" ref={this.nameRef} />

          <label for="number">Number</label>
          <input type="text" name="number" ref={this.numberRef} />

          <button>SUBMIT</button>
        </form>
          <hr/>
        <p>{this.state.name}</p>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;