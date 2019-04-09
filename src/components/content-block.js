import React from "react";
import PropTypes from "prop-types";

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

ContentBlock.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default ContentBlock;
