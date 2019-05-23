import React, { Component } from "react";

import { connect } from 'react-redux'

import Header from "../Header/Header";
import CorkBoard from '../../Assets/corkboard.jpg'
import NoteContainer from '../NoteContainer/NoteContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background" style={{
            backgroundImage: `url(${CorkBoard})`
          }}>
          <Header />
          <NoteContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)

