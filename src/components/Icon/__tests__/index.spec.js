import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Icon from "../";

it("should render the component correctly with only required props", () => {
  const tree = renderer.create(<Icon name="arrowLeft" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the component correctly with size props", () => {
  const tree = renderer.create(<Icon name="arrowLeft" size="30" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the component correctly with color props", () => {
  const tree = renderer
    .create(<Icon name="arrowLeft" color="white" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
