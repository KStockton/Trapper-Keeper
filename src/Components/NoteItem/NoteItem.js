import React, { Component } from "react";

class NoteItem extends Component {
  constructor() {
    super();
    this.state = {
      listItem: "",
      isComplete: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleComplete = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };

  render() {
    const { listItem, isComplete } = this.state;
    const { tasks } = this.props;
    let checkBox;

    if (isComplete === true) {
      checkBox = <div className="checked" onClick={this.handleComplete} />;
    } else {
      checkBox = <div className="unchecked" onClick={this.handleComplete} />;
    }

    return (
      <div className="note-item-component">
        {checkBox}
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
