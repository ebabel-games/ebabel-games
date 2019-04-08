import React from "react";
import renderer from "react-test-renderer";

import Email from "./email";

describe("Email", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Email />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
