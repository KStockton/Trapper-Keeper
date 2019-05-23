import React, { Component } from "react";
import Header from "../Header/Header";
import CorkBoard from "../../Assets/corkboard.jpg";
import NoteContainer from "../NoteContainer/NoteContainer";
import { Route, Switch } from "react-router-dom";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
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
          <Switch>
            <Route to="/" component={NoteContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
