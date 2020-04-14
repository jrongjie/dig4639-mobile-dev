import React from "react";

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
        let name = this.conName.current.value;
        let number = this.conNumber.current.value;
        
        window.fetch("http://plato.mrl.ai:8080/contacts/add", {
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
            this.setState({ value: name})
            this.setState({ value: number})
        }
        , [])
    }

    handleSubmit = e => {
        e.preventDefault();
        this.newVal()
    }

    render(){
        return(
            <div>
                <form className = "card" onSubmit= {this.getValue}>
                    <h2>Add Contact</h2>
                    <label>Contact Name</label>
                    <input type= "text" id= "name"></input>
                        <br/>
                    <label>Contact Number</label>
                    <input type= "number" id= "number"></input>
                        <br/>
                    <button>Add Contact</button>
                </form>
            </div>
        )
    }
}
export default AddContact;