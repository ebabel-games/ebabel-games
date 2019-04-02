import React from "react";

export default (title) => (
  <article class="content-block shadow">
    <header>
      <h1>{title}</h1>
    </header>
    {this.props.children}
  </article>
);
