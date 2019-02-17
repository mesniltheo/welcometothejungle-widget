import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Content, Scroll, Slide } from "../styled";

describe("Slider styled", () => {
  describe("Scroll", () => {
    it("should render the Scroll with a correct translate", () => {
      const tree = renderer
        .create(
          <Scroll translate={200}>
            <div>test</div>
          </Scroll>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("transform", `translate3d(-${200}px,0,0)`);
    });
  });

  describe("Slide", () => {
    it("should render the Slide with a correct width", () => {
      const tree = renderer
        .create(
          <Slide width={200}>
            <div>test</div>
          </Slide>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("width", `${200}px`);
    });
  });

  describe("Content", () => {
    it("should render the Content with a correct width", () => {
      const tree = renderer
        .create(
          <Content contentWidth={300}>
            <div>test</div>
          </Content>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("width", "300px");
    });
  });
});
