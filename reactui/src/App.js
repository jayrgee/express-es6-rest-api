import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
