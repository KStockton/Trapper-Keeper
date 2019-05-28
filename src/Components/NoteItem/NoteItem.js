import React, { Component } from "react";

export class NoteItem extends Component {
  state = { listItem: "", isComplete: false };

  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      isComplete: tasks.completed
    });
  }

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  handleComplete = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };

  render() {
    const { listItem, isComplete } = this.state;
    const { tasks } = this.props;

    return (
      <div className="note-item-component">
        {isComplete === true ? (
          <div id="checked" className="checked" onClick={this.handleComplete} />
        ) : (
          <div id="unchecked" className="unchecked" onClick={this.handleComplete} />
        )}
        <p className="list-item">{tasks.message}</p>
        <button className={listItem !== "" ? "no-content" : "remove-content"}>
          x
        </button>
      </div>
    );
  }
}

export default NoteItem;
