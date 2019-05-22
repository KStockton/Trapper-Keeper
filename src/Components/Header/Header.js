import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <header className="header">
          <div className="push-pin" />
          <h1 className="title">TrapperKeeper</h1>
          <button className="add-note" />
        </header>
      </div>
    );
  }
}

export default Header;
