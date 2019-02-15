import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Center from "../";

it("should render the component correctly", () => {
  const tree = renderer.create(<Center>test</Center>).toJSON();

  expect(tree).toMatchSnapshot();
});
