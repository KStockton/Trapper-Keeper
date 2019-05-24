import React, { Component } from "react";

export default class NewCard extends Component {
  constructor() {
    super();

    this.state = {
      editList: "",
      title: "",
      listItem: "",
      notes: []
    };
  }

  componentDidMount() {}

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
    const { title, listItem, notes } = this.state;
    const newNote = { id: Date.now(), title, text: listItem, completed: false };

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
    editItem.text = value;
    this.setState({ notes });
  };

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
            <input className="todo" value={incomplete.text} />
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
              class="material-icons"
              id={complete.id}
              onClick={this.handleComplete}
            >
              check_box
            </i>
            <input className="completed todo" value={complete.text} />
            <i className="material-icons">delete_forever</i>
          </section>
        );
      });

    return (
      <div>
        <form className="NewCard-form">
          <input
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
      </div>
    );
  }
}
