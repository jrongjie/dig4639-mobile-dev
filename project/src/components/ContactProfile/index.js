//import Elements 
import React from "react";
import "./index.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {profile: []};
    
      }
    
    componentDidMount() {
        fetch("http://plato.mrl.ai:8080/profile", 
        {
            headers: {API: "gardner"}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({profile:[data]});
        });
    
      }
    render(){
        return(
            <div className = "card">
                <span className = "close" onClick = {this.props.dataclick} datatitle = {this.props.title}>
                    &times;
                </span>
                <h3>{this.props.title}</h3> 
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Profile;