/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import MainHeader from "./main-header";

describe("MainHeader", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<MainHeader title="Page Title" subtitle="Sample subtitle" />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
  
  it("renders a div with the expected css class", () => {
    const div = tree.children.filter(c => c.type === "div")[0];
    expect(div.props.className).toBe("container");
  });
  
  it("display title in h1 and subtitle in h2", () => {
    const div = tree.children.filter(c => c.type === "div")[0];
    const h1 = div.children.filter(c => c.type === "h1")[0];
    const h2 = div.children.filter(c => c.type === "h2")[0]
    expect(h1.children[0]).toBe("Page Title");
    expect(h2.children[0]).toBe("Sample subtitle");
  });
});
