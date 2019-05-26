import React, { Component } from "react";

class NoteItem extends Component {
  state = { listItem: "", isComplete: false };

  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      isComplete: tasks.completed
    });
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

    console.log(tasks.completed);

    return (
      <div className="note-item-component">
        {isComplete === true ? (
          <div className="checked" onClick={this.handleComplete} />
        ) : (
          <div className="unchecked" onClick={this.handleComplete} />
        )}
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
