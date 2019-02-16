import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Widget from "../";

it("should render the component correctly", () => {
  const tree = renderer.create(<Widget />).toJSON();

  expect(tree).toMatchSnapshot();
});
