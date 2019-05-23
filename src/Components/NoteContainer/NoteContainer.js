import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";

class NoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allNotes: []
    }
  }

  componentDidMount() {
    fetchAllNotes().then(results => this.setState({ allNotes: results }));
  }

  render() {
    let { allNotes } = this.state;
    let notes;

    if (allNotes.length) {
      notes = this.state.allNotes.map(note => (
        <NoteCard key={note.id} data={note} />
      ));
    } else {
      console.log('loading');
    }

    return <div className="note-container-component">{notes}</div>;
  }
}

export default NoteContainer;
