import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    // why is there one? why is it inside the constructor?
    this.handleClick = this.handleClick.bind(this);
  }

  handleUsername(value) {
    this.setState({ username: value });
  }
  handlePassword(value) {
    this.setState({ password: value });
  }
  // what's the dollar sign about?
  handleClick() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleUsername(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.handlePassword(e.target.value)}
          type="text"
        />
        <button
          //can you alert here or am I going crazy?
          // onClick={this.handleLogin}>Login<button/>
          onClick={this.handleClick}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
