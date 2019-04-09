/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import Telephone from "./telephone";

describe("Telephone", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<Telephone />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it ("creates an anchor tag", () => {
    expect(tree.type).toBe("a");
  });

  it("has an href and a className property with the expected values", () => {
    expect(tree.props.href).toBe("tel:0031621809899");
    expect(tree.props.className).toBe("telephone");
  });

  it ("has one child that is a text string with expected value", () => {
    expect(tree.children.length).toBe(1);
    expect(typeof tree.children[0]).toBe("string");
    expect(tree.children[0]).toBe("+31 (0)6 21 80 98 99");
  });
});
