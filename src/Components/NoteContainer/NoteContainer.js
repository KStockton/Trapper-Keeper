import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
import { connect } from "react-redux";
import { allNotes } from "../../Actions/index";

export class NoteContainer extends Component {
  state = { allNotes: [] };

  componentDidMount() {
    console.log('rendering')
    fetchAllNotes().then(results => this.props.allNotes(results));
  }

  renderNotes = () => {
    return this.props.notes.flat().map(note => <NoteCard key={note.id} data={note} />);
  };

  render() {
    return <div className="note-container-component">{this.renderNotes()}</div>;
  }
}

export const mapStateToProps = state => ({
  notes: state.notes
});

export const mapDispatchToProps = dispatch => ({
  allNotes: notes => dispatch(allNotes(notes))
});

NoteContainer.propTypes = {
  notes: PropTypes.array,
  allNotes: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContainer);
