import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav className="nav shadow">
    <div className="container">
      <ul>
        <li><Link to="/" activeClassName="currentPage">Home</Link></li>
        <li><Link to="/free-games" activeClassName="currentPage">Games</Link></li>
      </ul>
    </div>
  </nav>
);

export default Nav;
