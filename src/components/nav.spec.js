/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import Nav from "./nav";

describe("Nav", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<Nav />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
    expect(tree.type).toBe("nav");
    expect(tree.props.className).toBe("nav shadow");
  });

  it("has a child div with container class", () => {
    const div = tree.children[0];
    expect(div.type).toBe("div");
    expect(div.props.className).toBe("container");
  });

  it("has a ul, with 2 li and a Link component in each li", () => {
    const div = tree.children[0];
    const ul = div.children[0];
    const liHome = ul.children[0];
    const liGames = ul.children[1];
    const linkHome = liHome.children[0];
    const linkGames = liGames.children[0];
    expect(ul.type).toBe("ul");
    expect(liHome.type).toBe("li");
    expect(liGames.type).toBe("li");
    expect(linkHome.type).toBe("a");
    expect(linkGames.type).toBe("a");
    expect(linkHome.props.href).toBe("/");
    expect(linkGames.props.href).toBe("/free-games");
  });
});
