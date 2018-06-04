import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      list: ["A", "List", "Has", "No", "Value"]
    };
  }

  render() {
    let showList = this.state.list.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{showList}</div>;
  }
}

export default App;
