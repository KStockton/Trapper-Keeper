import React, {Component } from 'react';
// import './Main.scss';
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