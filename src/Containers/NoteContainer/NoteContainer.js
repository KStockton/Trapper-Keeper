import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";
import { connect } from "react-redux";
import { allNotes } from "../../Actions/index";
import PropTypes from "prop-types";

export class NoteContainer extends Component {
  componentDidMount() {
    fetchAllNotes().then(results => this.props.allNotes(results));
  }

  renderNotes = () => {
    return this.props.notes
      .flat()
      .map(note => <NoteCard key={note._id} data={note} />);
  };

  render() {
    const { notes } = this.props;
    return (
      <React.Fragment>
        {notes.length ? (
          <div className="note-container-component">{this.renderNotes()}</div>
        ) : (
          <div className="note-container-start">
            <h3 className="intro-title">Welcome to TrapperKeeper</h3>
            <p className="intro-paragraph">
              TrapperKeeper is an application that helps you keep track of your
              busy life by creating online checklists. <br />
              <br /> Add a card by clicking the button in the upper right to
              start.
            </p>
          </div>
        )}
      </React.Fragment>
    );
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContainer);
