import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from "./Image.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "https://i.pinimg.com/originals/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"
          }
        />
      </div>
    );
  }
}

export default App;
