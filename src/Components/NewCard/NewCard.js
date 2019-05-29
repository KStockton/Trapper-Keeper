import React, { Component } from "react";
import { fetchAddNote } from "../../Api/fetch/fetchAddNote";
import { fetchEditNote } from "../../Api/fetch/fetchEditNote";
import { fetchNote } from "../../Api/fetch/fetchNote";
import { Link } from "react-router-dom";

export class NewCard extends Component {
  state = { title: "", listItem: "", notes: [] };

  componentDidMount() {
    this.grabInfo();
  }

  grabInfo = async () => {
    const { id } = this.props;

    if (id) {
      const response = await fetchNote(id);
      const { title, list } = response;

      this.setState({
        title,
        notes: list
      });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleComplete = event => {
    const { notes } = this.state;
    let { id } = event.target;

    id = parseInt(id);

    const togglecomplete = notes.find(note => note.id === id);
    togglecomplete.completed = !togglecomplete.completed;

    this.setState({ notes });
  };

  handleKeyPress = () => {
    const { listItem, notes } = this.state;
    const newNote = {
      id: Date.now(),
      message: listItem,
      completed: false
    };

    this.setState({
      notes: [...notes, newNote],
      listItem: ""
    });
  };

  handleSaveNote = () => {
    const { id } = this.props;
    const { title, notes } = this.state;
    if (this.props.id) {
      const updatedList = { id, title, notes };
      fetchEditNote(updatedList);
    } else {
      fetchAddNote(title, notes);
    }
  };

  deleteListItem = noteId => {
    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes });
  };

  editListItem = (noteId, e) => {
    const { notes } = this.state;
    const note = notes.find(n => n.id === noteId);
    note.message = e.target.value;
    this.setState({ notes });
  };

  render() {
    const { notes } = this.state;

    let todos = notes
      .filter(note => !note.completed)
      .map(incomplete => {
        return (
          <section key={incomplete.id} className="note-item-component">
            <div
              className="unchecked"
              id={incomplete.id}
              onClick={this.handleComplete}
            />
            <input
              className="todo"
              value={incomplete.message}
              onChange={e => this.editListItem(incomplete.id, e)}
            />
            <i
              className="material-icons"
              data-test="delete-button"
              onClick={() => this.deleteListItem(incomplete.id)}
            >
              delete_forever
            </i>
          </section>
        );
      });

    let complete = notes
      .filter(note => note.completed)
      .map(complete => {
        return (
          <section key={complete.id} className="note-item-component">
            <div
              className="checked"
              id={complete.id}
              onClick={this.handleComplete}
            />
            <input
              className="completed todo"
              value={complete.message}
              onChange={e => this.editListItem(complete.id, e)}
            />
            <i
              className="material-icons"
              data-test="delete-button"
              onClick={() => this.deleteListItem(complete.id)}
            >
              delete_forever
            </i>
          </section>
        );
      });

    return (
      <div className="new-card-component">
        <form className="new-card-form">
          <input
            id="title"
            type="text"
            name="title"
            className="note-title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <section className="add-new-note">
            <div className="plus" />
            <input
              type="text"
              name="listItem"
              className="list-item"
              value={this.state.listItem}
              placeholder="List Item"
              data-test="enter-item"
              onChange={this.handleChange}
              onKeyPress={event => {
                if (event.key === "Enter") this.handleKeyPress();
              }}
            />
          </section>
        </form>
        {todos}
        {complete}
        {this.state.notes.length ? (
          <section className="new-note-btns">
            <button
              className="save-note"
              data-test="save-note"
              onClick={() => this.handleSaveNote()}
            >
              Save note
            </button>
            <Link to={"/"}>
              <button className="save-note" data-test="return-to-notes">
                Return to all notes
              </button>
            </Link>
          </section>
        ) : null}
      </div>
    );
  }
}

export default NewCard;
