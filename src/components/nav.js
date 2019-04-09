import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav className="squares shadow right">
    <div className="container">
      <ul className="nav">
        <li><Link to="/" activeClassName="currentPage">Home</Link></li>
        <li><Link to="/free-games" activeClassName="currentPage">Games</Link></li>
      </ul>
      <span className="blue"></span>
      <span className="yellow"></span>
      <span className="orange"></span>
    </div>
  </nav>
);

export default Nav;
