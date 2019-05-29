import React, { Component } from "react";
import { fetchAddNote } from "../../Api/fetch/fetchAddNote";
import { fetchEditNote } from "../../Api/fetch/fetchEditNote";
import { fetchNote } from "../../Api/fetch/fetchNote";
import { Link } from "react-router-dom";

export class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      editList: "",
      main: false,
      title: "",
      listItem: "",
      notes: []
    };
  }

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

  editListItem = id => {
    console.log(id);
    const { notes, editList } = this.state;
    let editItem = notes.find(note => note.id == id);
    console.log(editItem);
    // editItem.message = editList
    this.setState({ main: !this.state.main });
    // const { value } = event.target
    // id = parseInt(id);

    // editItem.task = value;
  };

  handleSaveNote = () => {
    if (this.props.id) {
      // fetchEditNote()
      console.log("This is where the fetchEditNote goes");
    } else {
      fetchAddNote(this.state.title, this.state.notes);
    }
  };

  deleteListItem = noteId => {
    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes });
  };

  render() {
    const { notes, main, editList } = this.state;

    let todos = notes
      .filter(note => note.completed === false)
      .map(incomplete => {
        return (
          <section key={incomplete.id} className="note-item-component">
            <div
              className="unchecked"
              id={incomplete.id}
              onClick={this.handleComplete}
            />
            {main ? (
              <input
                className="todo"
                name="editList"
                value={editList}
                onChange={this.handleChange}
              />
            ) : (
              <p
                className="completed todo"
                onClick={() => this.editListItem(complete.id)}
              >
                {incomplete.message}
              </p>
            )}
            <i className="material-icons">delete_forever</i>
          </section>
        );
      });

    let complete = notes
      .filter(note => note.completed === true)
      .map(complete => {
        return (
          <section key={complete.id} className="note-item-component">
            <div
              className="checked"
              id={complete.id}
              onClick={this.handleComplete}
            />
            {main ? (
              <input
                className="todo"
                name="editList"
                value={editList}
                onClick={() => this.editListItem(complete.id)}
              />
            ) : (
              <p
                className="completed todo"
                onClick={() => this.editListItem(complete.id)}
              >
                {complete.message}
              </p>
            )}

            <i
              id="delete-button"
              className="material-icons"
              onClick={() => this.deleteListItem(complete.id)}
            >
              delete_forever
            </i>
          </section>
        );
      });

    return (
      <div className="new-card-component">
        <form className="NewCard-form">
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
          <React.Fragment>
            <button id="save-btn" onClick={() => this.handleSaveNote()}>
              Save
            </button>
            <Link to={"/"}>
              <button>Return to all notes</button>
            </Link>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default NewCard;
