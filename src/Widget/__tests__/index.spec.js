import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import wttjContent from "./../../assets/wttj-content";
import Widget from "../";

it("should render the component correctly", () => {
  const tree = renderer
    .create(
      <Widget company={wttjContent.company} content={wttjContent.content} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
