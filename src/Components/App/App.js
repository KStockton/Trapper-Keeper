import React, { Component } from "react";
import Header from "../Header/Header";
import CorkBoard from "../../Assets/corkboard.jpg";
// import fetchData from "../../Api/fetchData";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <div
          className="background"
          style={{
            backgroundImage: `url(${CorkBoard})`
          }}
        >
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
