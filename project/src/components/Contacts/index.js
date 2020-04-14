import React from "react";

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {contacts: []};
    this.profile = React.createRef();
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
       {this.state.contacts.map((value, index) => {
          return <p key={index}>{value.name}, {value.number}</p>;
        })
       }
      </div>
    );
  }
}

export default Contacts;