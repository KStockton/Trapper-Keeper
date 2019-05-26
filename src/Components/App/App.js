import React, { Component } from "react";
import Header from "../Header/Header";
import NoteContainer from "../NoteContainer/NoteContainer";
import NotFound from "../NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import NewCard from "../NewCard/NewCard";
import ViewNote from "../ViewNote/ViewNote";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={NoteContainer} />
          <Route
            path="/notes/:id"
            render={({ match }) => {
              const { id } = match.params;
              const note = this.props.notes.find(
                note => note.id === parseInt(id)
              );
              if (note) {
                return <ViewNote {...note} />;
              }
            }}
          />
          <div className="center-new-card">
            <Route path="/new-note" component={NewCard} />
          </div>
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  notes: state.notes
});

App.propTypes = {
  notes: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(App);
