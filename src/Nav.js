import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="squares shadow right">
    <div className="container">
      <ul className="nav">
        <li><NavLink exact to="/" activeClassName="currentPage">Home</NavLink></li>
        <li><NavLink to="/free-games" activeClassName="currentPage">Games</NavLink></li>
      </ul>
      <span className="blue"></span>
      <span className="yellow"></span>
      <span className="orange"></span>
    </div>
  </div>
);
