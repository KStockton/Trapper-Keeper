import React, {Component } from 'react';
import NoteContainer from '../NoteContainer/NoteContainer';

class Main extends Component {
  render() {
    return(
      <div className="main-component">
        <NoteContainer />
      </div>
    )
  }
}

export default Main;