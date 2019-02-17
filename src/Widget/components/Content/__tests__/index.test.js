import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Content from "../";

it("should render the component for picture", () => {
  const item = {
    type: "picture",
    caption: "img.png"
  };
  const tree = renderer.create(<Content item={item} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the component for video", () => {
  const item = {
    type: "video",
    caption: "img.png",
    title: "title",
    subtitle: "subtitle"
  };
  const tree = renderer.create(<Content item={item} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the component for quote", () => {
  const item = {
    type: "quote",
    text: "c'est pas faut !"
  };
  const tree = renderer.create(<Content item={item} />).toJSON();

  expect(tree).toMatchSnapshot();
});
