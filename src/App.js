import React from 'react';
import logo from './logo.svg';
// import './App.scss';
import Main from './Containers/Main/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <Main/>
    </div>
  );
}

export default App;
