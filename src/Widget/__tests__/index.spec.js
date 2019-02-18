import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";

import { ARROW_LEFT, ARROW_RIGHT } from "./../../constants";
import wttjContent from "./../../assets/wttj-content";
import Widget from "../";

const DEFAULT_PROPS = {
  company: wttjContent.company,
  content: wttjContent.content
};

const initInnerWidth = 1000;

describe("Widget", () => {
  afterAll(() => {
    Object.defineProperty(window, "innerWidth", { value: initInnerWidth });
  });

  it("should render the component correctly", () => {
    const tree = shallow(<Widget {...DEFAULT_PROPS} />);

    expect(tree).toMatchSnapshot();
  });

  it("should render the component correctly for mobile", () => {
    Object.defineProperty(window, "innerWidth", { value: 400 });
    const tree = shallow(<Widget {...DEFAULT_PROPS} />);

    expect(tree).toMatchSnapshot();
  });

  describe("setWidth", () => {
    it("should mount component and add event listener with setWidth", () => {
      const spy = jest.spyOn(window, "addEventListener");

      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const setWidth = tree.instance().setWidth;

      expect(spy).toHaveBeenCalledWith("resize", setWidth);
    });

    it("should unmount component and remove event listener", () => {
      const spy = jest.spyOn(window, "removeEventListener");
      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const setWidth = tree.instance().setWidth;

      tree.unmount();
      expect(spy).toHaveBeenCalledWith("resize", setWidth);
    });
  });

  describe("keyEvents", () => {
    it("should mount component and add event listener resize", () => {
      const spy = jest.spyOn(window, "addEventListener");

      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const keyEvents = tree.instance().keyEvents;

      expect(spy).toHaveBeenCalledWith("keydown", keyEvents);
    });

    it("should unmount component and remove event listener resize", () => {
      const spy = jest.spyOn(window, "removeEventListener");
      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const keyEvents = tree.instance().keyEvents;

      tree.unmount();
      expect(spy).toHaveBeenCalledWith("keydown", keyEvents);
    });

    it("should call handlePrev if arrow left key is clicked", () => {
      jest.spyOn(window, "removeEventListener");

      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const spy = jest.spyOn(tree.instance(), "handlePrev");

      map.keydown({ keyCode: ARROW_LEFT });

      expect(spy).toHaveBeenCalled();
    });

    it("should call handleNext if arrow right key is clicked", () => {
      jest.spyOn(window, "removeEventListener");

      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const tree = mount(<Widget {...DEFAULT_PROPS} />);
      const spy = jest.spyOn(tree.instance(), "handleNext");

      map.keydown({ keyCode: ARROW_RIGHT });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("setTranslateScroll", () => {
    it("should call setTranslateScroll when state change", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      const spy = jest.spyOn(tree.instance(), "setTranslateScroll");
      tree.setState({ widthContent: 300, step: 2 });

      expect(spy).toHaveBeenCalledWith(300, 2);
      expect(tree.state().translateScroll).toEqual(600);
    });
  });

  describe("handleNext", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ columnsResize: 3, step: 1, steps: 6 });

      tree.instance().handleNext();

      expect(tree.state().step).toEqual(2);
    });

    it("should not change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ columnsResize: 3, step: 3, steps: 6 });

      tree.instance().handleNext();

      expect(tree.state().step).toEqual(3);
    });
  });

  describe("handlePrev", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ step: 5 });

      tree.instance().handlePrev();

      expect(tree.state().step).toEqual(4);
    });

    it("should not change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ step: 0 });

      tree.instance().handlePrev();

      expect(tree.state().step).toEqual(0);
    });
  });
});
