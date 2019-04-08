import React from "react";

const ContentBlock = (props) => (
  <article className={`content-block shadow ${props.image || ""}`.trim()}>
    {
      props.title ?
      (
        <header>
          <h1>{props.title}</h1>
        </header>
      ) : null
    }
    {props.children}
  </article>
);

export default ContentBlock;
