import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";

class NoteContainer extends Component {
  state = { allNotes: [] };

  componentDidMount() {
    fetchAllNotes().then(results => this.setState({ allNotes: results }));
  }

  renderNotes = () => {
    let { allNotes } = this.state;
    return allNotes.map(note => <NoteCard key={note.id} data={note} />);
  };

  render() {
    return <div className="note-container-component">{this.renderNotes()}</div>;
  }
}

export default NoteContainer;
