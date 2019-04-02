import React from "react";

export default (props) => (
  <article class="content-block shadow">
    <header>
      <h1>{props.title}</h1>
    </header>
    {props.children}
  </article>
);
