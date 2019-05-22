import React, { Component } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Header />
          <Main />
          <h1>APP</h1>
        </div>
      </div>
    );
  }
}

export default App;