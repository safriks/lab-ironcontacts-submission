import React, { Component } from 'react';
import Celebline from './components/CelebLine';
import './App.css';
import contacts from './contacts.json';

function CelebContactTable(props){

  let celebs = props.displayedContacts.map((oneCelebObj)=> <Celebline {...oneCelebObj} /> )
  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Telephone</th>
      </tr>
      {celebs}
    </table>
  );
}

class App extends Component {
  
  constructor(props){
    super(props)
  //  this.someThing = this.someThing.bind(this) // somethingThatNeedsToAlwaysGetTheAppAsThis
  }

  state = {
    displayedContacts: []
  
  }
  // Iteration 1:
  DisplayFiveOfEm = () => {
    let copyContacts = [...contacts];
    copyContacts.splice(5);
    this.setState({displayedContacts: copyContacts})
  }
  // Iteration 2:
  AddRandomContact = () => {
    //let contactsPlusOne = [...];
    this.state.displayedContacts.unshift(contacts[Math.floor(Math.random()*contacts.length)]);
    this.setState({displayedContacts: this.state.displayedContacts});
  }
  SortByPopularity = () => {
    this.state.displayedContacts.sort((a,b)=>b.popularity-a.popularity)
    this.setState({displayedContacts: this.state.displayedContacts});
  }
  SortByName = () => {
    this.state.displayedContacts.sort((a,b)=>{
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;  
    })
    this.setState({displayedContacts: this.state.displayedContacts});
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.DisplayFiveOfEm}>Iteration 1 - show five</button>
        <button onClick={this.AddRandomContact}>Iteration 2 - add randon contact</button>
        <button onClick={this.SortByName}>SortByName</button>
        <button onClick={this.SortByPopularity}>SortByPopularity</button>

        {this.state.displayedContacts.length ? <CelebContactTable displayedContacts={this.state.displayedContacts}/>  : <p>nothing to display yet</p>}
      </div>
    );
  }
}

export default App;
