import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-component ">
        <header>
          <Link to={"/"}>
            <h1 className="logo">Trapper<span>Keeper</span></h1>
          </Link>
          <Link to={"/new-note"}>
            <button className="add-note"></button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
