import React, { Component } from "react";
import { connect } from 'react-redux'
import Main from "../Main/Main";
import Header from "../Header/Header";
import CorkBoard from '../../Assets/corkboard.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background" style={{
            backgroundImage: `url(${CorkBoard})`
          }}>
          <Header />
          <Main />
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

