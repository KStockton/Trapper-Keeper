import React, { Component } from "react";
// import "./NoteContainer.scss";
import NoteCard from '../NoteCard/NoteCard';

class NoteContainer extends Component {
  render() {
    return (
      <div className="note-container-component">
        <NoteCard />
      </div>
    );
  }
}

export default NoteContainer;
