import React, { Component } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import CorkBoard from '../../Assets/corkboard.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background" style={{
            backgroundImage: `url(${CorkBoard})`
          }}>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
