import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found-component">
    <img
      src="https://i.imgur.com/aJoxMYW.jpg"
      alt="404, page not found"
      className="not-found"
    />
    <Link to="/">
      <button className="home-btn" onClick={console.log('HEYYYYY')}>Home Page</button>
    </Link>
  </div>
);

export default NotFound;
