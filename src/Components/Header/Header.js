import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-component ">
        <header className="header">
          <div className="push-pin" />
          <Link to={"/"}>
            <h1 className="title">TrapperKeeper</h1>
          </Link>
          <Link to={"/new-note"}>
            <button className="add-note" />
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
