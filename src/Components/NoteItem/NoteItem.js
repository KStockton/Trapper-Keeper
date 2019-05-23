import React, { Component } from "react";
// import "./NoteItem.scss";

class NoteItem extends Component {
  constructor() {
    super();
    this.state = {
      listItem: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { listItem } = this.state;
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <div className="note-item-component">
        <input type="checkbox" />
        <input
          name="listItem"
          type="text"
          placeholder="List Item"
          className="list-item"
          value={tasks.message}
          onChange={this.handleChange}
        />
        <button className={listItem !== "" ? "no-content" : "remove-content"}>
          x
        </button>
      </div>
    );
  }
}

export default NoteItem;
