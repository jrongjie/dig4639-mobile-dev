import React from "react";
import Contacts from "../Contact";

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
            })
        }
        
        fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
        .then((res) => res.json())
        .then((data) => {
            this.setState({value:this.textInput.current.value})
            this.setState({value:this.textInput2.current.value})
            
            console.log(data)
        }, [])
    }

    handleSubmit = e => {
        e.preventDefault();
        this.newVal()
    }

    render(){
        return(
            <div>
                <form onSubmit= {this.getValue}>
                    <h1>Add Contact</h1>
                    <label for= "name">Contact Name</label>
                    <input type= "text" id= "name"></input>
                        <br/>
                    <label for= "number">Contact Number</label>
                    <input type= "number" id= "number"></input>
                        <br/>
                    <button>Add Contact</button>
                </form>
                <Contacts />
            </div>
        )
    }
}
export default AddContact;