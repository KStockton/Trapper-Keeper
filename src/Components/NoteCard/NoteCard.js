import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";
import { fetchDeleteNote } from "../../Api/fetch/fetchDeleteNote";
import { Link } from "react-router-dom";

export class NoteCard extends Component {
  state = { title: "", delete: false };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  renderListItems = () => {
    const { list } = this.props.data;
    return list.map(task => <NoteItem key={task.id} tasks={task} />);
  };

  handleMouseOver = () => {
    this.setState({ delete: !this.state.delete });
  };

  handleDelete = noteId => {
    fetchDeleteNote(noteId);
  };

  render() {
    const { title, id } = this.props.data;
    return (
      <Link to={`notes/${id}`}>
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
            {this.renderListItems()}
            <section className="note-options">
              <input type="submit" className="btn" value="Save" />
              {this.state.delete === true ? (
                <div
                  className="red-delete-btn"
                  onMouseOver={this.handleMouseOver}
                  onMouseLeave={this.handleMouseOver}
                  onClick={() => this.handleDelete(id)}
                />
              ) : (
                <div
                  className="delete-btn"
                  onMouseOver={this.handleMouseOver}
                />
              )}
            </section>
          </section>
        </div>
      </Link>
    );
  }
}

export default NoteCard;
