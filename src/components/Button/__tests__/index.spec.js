import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-styled-components";

import Button from "./../";

describe("Button", () => {
  describe("Link", () => {
    it("should render the link button", () => {
      const tree = renderer
        .create(
          <Button href="http://www.test.com">
            <div>Click me</div>
          </Button>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("should render the link button with blank", () => {
      const tree = renderer
        .create(
          <Button href="http://www.test.com" blank>
            <div>Click me</div>
          </Button>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("Button", () => {
    it("should render the button", () => {
      const onClick = jest.fn();
      const tree = renderer
        .create(
          <Button onClick={onClick}>
            <div>Click me</div>
          </Button>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("should call onClick", () => {
      const onClick = jest.fn();
      const tree = shallow(
        <Button onClick={onClick}>
          <div>Click me</div>
        </Button>
      );

      tree.simulate("click");

      expect(onClick).toHaveBeenCalled();
    });
  });
});
