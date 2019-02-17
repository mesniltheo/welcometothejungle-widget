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
    it("should render the Content with a correct width on mobile", () => {
      const tree = renderer
        .create(
          <Content columns={3}>
            <div>test</div>
          </Content>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("width", "100vw");
    });

    it("should render the Content with a correct width on desktop", () => {
      const tree = renderer
        .create(
          <Content columns={2}>
            <div>test</div>
          </Content>
        )
        .toJSON();

      expect(tree).toHaveStyleRule("width", "calc(100vw / 2)", {
        media: "(min-width:640px)"
      });
    });
  });
});
