import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";

class NoteCard extends Component {
  state = { title: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log("YO");
  };

  render() {
    const { title, tasks } = this.props.data;
    const listItems = tasks.map(task => (
      <NoteItem key={task.id} tasks={task} />
    ));
    return (
      <div className="note-card-component">
        <section className="note-card">
          <input
            type="text"
            className="note-title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
            name="title"
          />
          {listItems}
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
