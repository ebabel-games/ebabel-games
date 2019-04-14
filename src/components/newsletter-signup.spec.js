/* global expect  */
import React from "react";
import renderer from "react-test-renderer";

import NewsletterSignup from "./newsletter-signup";

describe("NewsletterSignup", () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(<NewsletterSignup />).toJSON();
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
    expect(tree.type).toBe("div");
    expect(tree.props.id).toBe("mc_embed_signup");
  });
});
