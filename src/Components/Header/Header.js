import React, { Component } from "react";
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <header className="header">
          <h1 className="title">TrapperKeeper</h1>
        </header>
      </div>
    );
  }
}

export default Header;
