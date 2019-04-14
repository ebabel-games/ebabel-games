/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import Footer from "./footer";

describe("Footer", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<Footer />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
    expect(tree.type).toBe("footer");
    expect(tree.props.className).toBe("container");
  });

  it("has 3 children", () => {
    const p = tree.children;
    expect(p.length).toBe(3);
  });
});
