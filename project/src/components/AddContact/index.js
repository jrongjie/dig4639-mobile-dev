import React from "react";

const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "gardner",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
}

class AddContact extends React.Component {
    constructor(props) {
        super(props);
    
        this.conName = React.createRef();
        this.conNumber = React.createRef();

        this.state = {
            value: "",
            value2: "",
        }
    }

    getValue = () => {
        let newHeaders = {...HEADERS,
            "method" : "POST",
            body: JSON.stringify({
              name: this.conName.current.value,
              number:this.conNumber.current.value
            })}

        fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
        .then(response => response.json())
        .then(() => {
            this.setState({value: this.conName.current.value})
            this.setState({value: this.conNumber.current.value})
        }
        , [])
    }

    handleSubmit = e => {
        e.preventDefault();
        this.getValue()
    }

    render(){
        return(
            <div>
                <form className = "card" onSubmit= {this.handleSubmit}>
                    <label>Contact Name</label>
                    <input type="text" ref={this.conName} id ="name"/>
                        <br/>
                    <label>Contact Number</label>
                    <input type="text" ref={this.conNumber} id ="number"/>
                        <br/>
                    <button type= "submit">Add Contact</button>
                </form>
            </div>
        )
    }
}
export default AddContact;