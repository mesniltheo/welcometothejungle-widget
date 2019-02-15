import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Header from "../";

it("should render the component correctly", () => {
  const tree = renderer
    .create(<Header name="wttj" logo="http://lorem.dolor/logo.png" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
