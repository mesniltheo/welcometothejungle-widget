import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { ProgressBar } from "../styled";

describe("ProgressBar styled", () => {
  describe("Wrapper", () => {
    it("should render the ProgressBar", () => {
      const tree = renderer.create(<ProgressBar progress={20} />).toJSON();

      expect(tree).toHaveStyleRule("width", "20%");
    });
  });
});
