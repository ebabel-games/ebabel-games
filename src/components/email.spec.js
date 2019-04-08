import React from "react";
import renderer from "react-test-renderer";

import Email from "./email";

describe("Email", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<Email />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  })

  it ("creates an anchor tag", () => {
    expect(tree.type).toBe("a");
  });

  it("has an href property with the expected value", () => {
    expect(tree.props.href).toBe("mailto:hello@ebabel.eu");
  });

  it ("has one child that is a text string with expected value", () => {
    expect(tree.children.length).toBe(1);
    expect(typeof tree.children[0]).toBe("string");
    expect(tree.children[0]).toBe("hello@ebabel.eu");
  });
});
