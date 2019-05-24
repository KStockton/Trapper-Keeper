import React, { Component } from "react";
import Header from "../Header/Header";
import NoteContainer from "../NoteContainer/NoteContainer";
import NotFound from "../NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="background">
          <Header />
          <Switch>
            <Route exact path="/" component={NoteContainer} />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
