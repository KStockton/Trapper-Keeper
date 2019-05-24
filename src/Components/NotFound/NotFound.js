import React from "react";
import "./NotFound.scss";
import {Link} from 'react-router-dom';

const NotFound = () => (
  <div className="notFoundComponent">
    <img src='https://i.imgur.com/aJoxMYW.jpg' alt='404, page not found'  className='notFound'/>
    <Link to="/" >
    <button className="home-btn">Home Page </button>
    </Link>
  </div>
  )

export default NotFound;
