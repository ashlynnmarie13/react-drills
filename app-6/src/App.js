import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleTask(value) {
    this.setState = { input: value };
  }

  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

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
