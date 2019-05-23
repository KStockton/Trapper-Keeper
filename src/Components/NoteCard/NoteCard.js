import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";

class NoteCard extends Component {
  state = { title: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log('YO')
  };

  render() {
    console.log('notecard')
    return (
      <div className="note-card-component">
        <section className="note-card">
          <input
            type="text"
            className="note-title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
            name="title"
          />
          <NoteItem />
          <input
            type="submit"
            className="btn"
            onClick={() => this.handleSubmit()}
            value="Save"
          />
        </section>
      </div>
    );
  }
}

export default NoteCard;
