import React, { Component } from 'react';
import Celebline from './components/CelebLine';
import './App.css';
import contacts from './contacts.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function CelebContactTable (props) {

  let celebs = props.displayedContacts.map((oneCelebObj, lineIndex)=>
    <Celebline  //{...oneCelebObj}
                pictureUrl={oneCelebObj.pictureUrl}
                name={oneCelebObj.name}
                popularity={oneCelebObj.popularity}
                removeContact={props.removeContact}
                lineIndex={lineIndex}
                /> )
  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Telephone</th>
        <th>delete</th>
      </tr>
      {celebs}
    </table>
  );
}

class App extends Component {
  
  constructor(props){
    super(props)
    //this.removeContact = this.removeContact.bind(this) // somethingThatNeedsToAlwaysGetTheAppAsThis
    this.state = {
      displayedContacts: []
    }
  }

 
  removeContact() {

  }

  removeContact = function name(params) {
    
  }
  //function removeContact(lineIndex){ 
  removeContact = lineIndex =>{ 
    let copiedState = [ ...this.state.displayedContacts ];
    copiedState.splice(lineIndex,1);
    this.setState({displayedContacts: copiedState})
  }
  // Iteration 1:
  DisplayFiveOfEm = () => {
    let copyContacts = [...contacts];
    copyContacts.splice(5);
    this.setState({displayedContacts: copyContacts})
    this.setState()
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
    console.log("render", this.state.displayedContacts)

    return (
      <div className="App">
       <Router>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/topics">Topics</Link>
        </nav>
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
        <button onClick={this.DisplayFiveOfEm}>Iteration 1 - show five</button>
        <button onClick={this.AddRandomContact}>Iteration 2 - add randon contact</button>
        <button onClick={this.SortByName}>SortByName</button>
        <button onClick={this.SortByPopularity}>SortByPopularity</button>

        {this.state.displayedContacts.length
        ? <CelebContactTable  displayedContacts={this.state.displayedContacts}
                              removeContact={this.removeContact}
        />
        : <p>nothing to display yet</p>}
      </div>
    );
  }
}

export default App;
