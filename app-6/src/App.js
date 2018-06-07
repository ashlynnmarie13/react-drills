import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    //our data that we'll be tracking is a list, an empty array
    this.state = {
      list: []
    };
    // we're binding the handleAdd function to make it work in render
    this.handleTask = this.handleTask.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  //we're passing in the value to handle task. This sets the state of the input
  // to the value passed in
  handleTask(value) {
    this.setState({ input: value });
  }
  // this method sets the state of the list to the state of the OLD list AND
  // the state of the NEW list... input starts as an empty string
  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }
  // new variable is list- we're mapping over the current state of the list array
  // returning what Todo through a child component
  // in order to render multiple components in the same structure,
  // you have to use keys to differentiate them
  // huge list, each Todo is going to be a li item
  // if we don't have index then card analogy, each key is an index
  // the task prop is the actual value, which is the entire element
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleTask(e.target.value)}
          />

          <button onClick={this.handleAdd}>Add</button>
        </div>

        <br />
        {list}
      </div>
    );
  }
}

export default App;
