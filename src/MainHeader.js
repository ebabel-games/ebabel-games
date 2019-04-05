import React from "react";

export default (props) => (
  <header className="header">
    <div className="container">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  </header>
);
