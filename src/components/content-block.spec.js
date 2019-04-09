/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import ContentBlock from "./content-block";

describe("ContentBlock", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContentBlock title="Content Block Title" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.type).toBe("article");
    expect(tree.props.className).toBe("content-block shadow");
  });
  
  it("renders no header at all if a title property is not set", () => {
    const tree = renderer.create(<ContentBlock />).toJSON();
    expect(tree.children).toBeNull();
  });
  
  it("sets the correct css class if an image property is set", () => {
    const tree = renderer.create(<ContentBlock image="sample-css-image-reference" />).toJSON();
    expect(tree.props.className).toBe("content-block shadow sample-css-image-reference");
  });
  
  it("can insert custom children element with expected content", () => {
    const tree = renderer.create(<ContentBlock><small>This is a custom element</small></ContentBlock>).toJSON();
    expect(tree.children[0].type).toBe("small");
    expect(tree.children[0].children[0]).toBe("This is a custom element");
  });
});
