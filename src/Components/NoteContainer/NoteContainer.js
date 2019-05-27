import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
import { connect } from "react-redux";
import { allNotes } from "../../Actions/index";
import PropTypes from 'prop-types'

export class NoteContainer extends Component {

  componentDidMount() {
    fetchAllNotes().then(results => this.props.allNotes(results));
  }

  renderNotes = () => {
    return this.props.notes
      .flat()
      .map(note => <NoteCard key={note.id} data={note} />);
  };

  render() {
    const{ notes } = this.props
    console.log(this.props.notes)
    return (
      <div className="note-container-component">
      {(notes.length) ? this.renderNotes() :  <section className="Note-container-start">
        <h3>Lets Get Started</h3>
        <p>Add a note above to begin<span role="img" aria-label="smile">😊</span></p>
      </section>}
     
    </div>
    )
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
