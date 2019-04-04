import React from 'react';

export default (props) => (
  <article className="{`content-block shadow ${props.image}`}">
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
