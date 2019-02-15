import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Footer from "../";

it("should render the component correctly", () => {
  const tree = renderer.create(<Footer link="wttj" />).toJSON();

  expect(tree).toMatchSnapshot();
});
