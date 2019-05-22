import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NoteCard.scss";

class NoteCard extends Component {
  state = { title: "" };
  render() {
    return (
      <div className="note-card-component">
        <section className="note-card">
          <input
            type="text"
            className="note-title"
            value={this.state.title}
            placeholder="Title"
            name="title"
          />
          <NoteItem />
        </section>
      </div>
    );
  }
}

export default NoteCard;
