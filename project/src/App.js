import React from 'react';
import AddContact from './components/AddContact';
import ContactProfile from './components/ContactProfile';
import Contacts from './components/Contacts';
import RemoveContact from './components/RemoveContact';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
        <h2>Add Contact</h2>
        <AddContact />
        <h2>Contact List</h2>
        <Contacts />
        <ContactProfile />
        <h2>Remove contact</h2>
        <RemoveContact />
      </div>
    );
  }
}

export default App;