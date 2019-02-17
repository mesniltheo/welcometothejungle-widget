import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import wttjContent from "./../../../../assets/wttj-content";

import Slider from "../";

const DEFAULT_PROPS = {
  content: wttjContent.content,
  contentWidth: 300,
  id: "wttj",
  width: 1000,
  translateScroll: 0
};

it("should render the component correctly", () => {
  const tree = renderer.create(<Slider {...DEFAULT_PROPS} />).toJSON();

  expect(tree).toMatchSnapshot();
});
