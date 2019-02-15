import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";

import Icon from "../";

it("should render the component correctly with only required props", () => {
  const tree = mount(<Icon name="logo" />);

  expect(tree).toMatchSnapshot();
});

it("should render the component correctly with size props", () => {
  const tree = mount(<Icon name="logo" size="30" />);

  expect(tree).toMatchSnapshot();
});

it("should render the component correctly with color props", () => {
  const tree = mount(<Icon name="logo" color="white" />);

  expect(tree).toMatchSnapshot();
});
