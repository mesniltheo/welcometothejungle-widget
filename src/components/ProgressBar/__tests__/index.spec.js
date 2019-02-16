import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ProgressBar from "../";

describe("ProgressBar", () => {
  it("should render the component", () => {
    const tree = renderer.create(<ProgressBar progress={20} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
