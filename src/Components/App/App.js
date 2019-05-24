import React, { Component } from "react";
import Header from "../Header/Header";
import NoteContainer from "../NoteContainer/NoteContainer";
import NotFound from "../NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
import NewCard from '../NewCard/NewCard'


class App extends Component {
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
            <Route to="/" component={NoteContainer}/>
            <Route path="" component={NotFound} />
          </Switch>
          <NewCard/>
        </div>
      </div>
    );
  }
}

export default App;
