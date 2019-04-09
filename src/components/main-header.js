import React from "react";
import PropTypes from "prop-types";

const MainHeader = (props) => (
  <header className="header">
    <div className="container">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  </header>
);

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default MainHeader;
