import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //setting up the initial state
    //this inclues an empty string, which is the part that will go in the text box
    //list is the original array of strings that will appear on the DOM
    this.state = {
      filterString: "",
      list: ["A", "List", "Has", "No", "Value"]
    };
  }
  // this function sets the state- whatever input(filter) is put in will become
  // "filterString", you are setting the state of filterString
  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    // creating a variable. This variable will equal the state of the "list"
    // array. Your parameters are the element and the index.
    let showList = this.state.list
      .filter((element, index) => {
        // you're returning the elements (either a, list, has, etc.) that include
        // whatever is in the current state of filterString
        return element.includes(this.state.filterString);
        // you're then mapping(looping) over the array and returning an
        //h2 for each element left
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      // here you're modifying the "input". The input is the box that you type
      // into. When it changes, the event gets passed into the handleChange
      // function
      // you display your variable "showList" on the page
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {showList}
      </div>
    );
  }
}

export default App;
