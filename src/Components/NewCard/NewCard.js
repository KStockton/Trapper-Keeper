import React, { Component } from "react";
import { fetchAddNote } from '../../Api/fetch/fetchAddNote'
import { Link } from 'react-router-dom'

export class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      editList: "",
      title: "",
      listItem: "",
      notes: []
    };
  }

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
    const newNote = { id: Date.now(), message: listItem, completed: false };

    this.setState({
      notes: [...notes, newNote],
      listItem: ""
    });
  };

  editListItem = (event, id) => {
    const { notes } = this.state;
    const { value } = event.target;
    id = parseInt(id);

    let editItem = notes.find(note => note.id === id);
    editItem.task = value;
    this.setState({ notes });
  };

  handleSaveNote = () => {
    fetchAddNote(this.state.title, this.state.notes)
    .then(results => console.log(results))
  }

  render() {
    const { notes } = this.state;
    let todos = notes
      .filter(note => note.completed === false)
      .map(incomplete => {
        return (
          <section key={incomplete.id}>
            <i
              className="material-icons"
              id={incomplete.id}
              onClick={this.handleComplete}
            >
              check_box_outline_blank
            </i>
            <input className="todo" value={incomplete.message} />
            <i className="material-icons">delete_forever</i>
          </section>
        );
      });

    let complete = notes
      .filter(note => note.completed === true)
      .map(complete => {
        return (
          <section key={complete.id}>
            <i
              className="material-icons"
              id={complete.id}
              onClick={this.handleComplete}
            >
              check_box
            </i>
            <input className="completed todo" value={complete.message} />
            <i className="material-icons">delete_forever</i>
          </section>
        );
      });

    return (
      <div>
        <form className="NewCard-form">
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="listItem"
            value={this.state.listItem}
            placeholder="listItem"
            onChange={this.handleChange}
            onKeyPress={event => {
              if (event.key === "Enter") this.handleKeyPress();
            }}
          />
        </form>
        {todos}
        {complete}
        <button onClick={()=> this.handleSaveNote()}>Save</button>
        <Link to={"/"}>
            <button>Return to all notes</button>
        </Link>
      </div>
    );
  }
}

export default NewCard;
