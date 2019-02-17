import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Cover } from "../styled";

describe("Content styled", () => {
  describe("Cover", () => {
    it("should render the button with a correct background-image", () => {
      const tree = renderer
        .create(
          <Cover caption="img.png">
            <div>Click me</div>
          </Cover>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("background-image", "url(img.png)");
    });
  });
});
