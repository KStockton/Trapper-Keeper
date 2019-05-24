import React, { Component } from "react";
import Header from "../Header/Header";
import NoteContainer from "../NoteContainer/NoteContainer";
import NotFound from "../NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
import NewCard from '../NewCard/NewCard'
import NoteCard from "../NoteCard/NoteCard";


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Switch>
            <Route exact path to="/" component={NoteContainer}/>
            <Route exact path="/notes/:id"  />
            <Route exact path="/new-note" component={NewCard}/>
          </Switch>
          <NewCard/>
      </div>
    );
  }
}

export default App;
