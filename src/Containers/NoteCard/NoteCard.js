import React, { Component } from "react";
import NoteItem from "../../Components/NoteItem/NoteItem";
import { fetchDeleteNote } from "../../Api/fetch/fetchDeleteNote";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";
//setstate error  in handleDelete function but havent done anything to the error if it is not null

export class NoteCard extends Component {
  constructor() {
    super();
    this.state = { title: "", delete: false };
  }

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  renderListItems = () => {
    const { list } = this.props.data;

    return list.map(task => <NoteItem key={task.id} tasks={task} />);
  };

  handleMouseOver = () => {
    this.setState({ delete: !this.state.delete });
  };

  handleDelete = async noteId => {
    try {
      await fetchDeleteNote(noteId);
      this.props.deleteNote(noteId);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { title, id } = this.props.data;
    return (
      <div className="note-card-component">
        <div className="note-title">{title}</div>
        {this.renderListItems()}
        <section className="note-options">
          <Link to={`notes/${id}`}>
            <button className="edit-note-btn">Edit Note</button>
          </Link>
          {this.state.delete === true ? (
            <div
              id="deletebtn"
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
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(actions.deleteNote(id))
});

export default connect(
  null,
  mapDispatchToProps
)(NoteCard);
