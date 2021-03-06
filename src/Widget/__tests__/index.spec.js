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

jest.useFakeTimers();

/* Create event for touchStart and touchMove */
function createClientXY(x, y) {
  return { clientX: x, clientY: y };
}

function createStartTouchEventObject({ x = 0, y = 0 }) {
  return { touches: [createClientXY(x, y)] };
}

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

  describe("slideNext", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ columnsResize: 3, step: 1, steps: 6 });

      tree.instance().slideNext();

      expect(tree.state().step).toEqual(2);
    });

    it("should not change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ columnsResize: 3, step: 3, steps: 6 });

      tree.instance().slideNext();

      expect(tree.state().step).toEqual(3);
    });
  });

  describe("slidePrev", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ step: 5 });

      tree.instance().slidePrev();

      expect(tree.state().step).toEqual(4);
    });

    it("should not change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      tree.setState({ step: 0 });

      tree.instance().slidePrev();

      expect(tree.state().step).toEqual(0);
    });
  });

  describe("handlePrev", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      const spySlidePrev = jest.spyOn(tree.instance(), "slidePrev");
      const spyStopAutoplay = jest.spyOn(tree.instance(), "stopAutoplay");

      tree.instance().handlePrev();

      expect(spySlidePrev).toHaveBeenCalled();
      expect(spyStopAutoplay).toHaveBeenCalled();
    });
  });

  describe("handleNext", () => {
    it("should change state step", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);
      const spySlideNext = jest.spyOn(tree.instance(), "slideNext");
      const spyStopAutoplay = jest.spyOn(tree.instance(), "stopAutoplay");

      tree.instance().handleNext();

      expect(spySlideNext).toHaveBeenCalled();
      expect(spyStopAutoplay).toHaveBeenCalled();
    });
  });

  describe("autoplay", () => {
    it("should change to next step width autoplay", () => {
      const spyInterval = jest.spyOn(window, "setInterval");
      shallow(<Widget {...DEFAULT_PROPS} autoplay />);

      // When I fast-forward time to 10000ms
      jest.runTimersToTime(10000);

      expect(spyInterval).toHaveBeenCalled();
    });

    it("should stop autoplay when handleNext called", () => {
      const spySetInterval = jest.spyOn(window, "setInterval");
      const spyClearInterval = jest.spyOn(window, "clearInterval");
      const tree = shallow(<Widget {...DEFAULT_PROPS} autoplay />);

      // When I fast-forward time to 10000ms
      jest.runTimersToTime(10000);

      expect(spySetInterval).toHaveBeenCalled();

      tree.instance().handleNext();

      expect(spyClearInterval).toHaveBeenCalled();
    });

    it("should stop autoplay when handlePrev called", () => {
      const spySetInterval = jest.spyOn(window, "setInterval");
      const spyClearInterval = jest.spyOn(window, "clearInterval");
      const tree = shallow(<Widget {...DEFAULT_PROPS} autoplay />);

      // When I fast-forward time to 10000ms
      jest.runTimersToTime(10000);

      expect(spySetInterval).toHaveBeenCalled();

      tree.instance().handlePrev();

      expect(spyClearInterval).toHaveBeenCalled();
    });
  });

  describe("Swiper", () => {
    it("should no swipe", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);

      const spyHandlePrev = jest.spyOn(tree.instance(), "handlePrev");
      const spyHandleNext = jest.spyOn(tree.instance(), "handleNext");

      // no swipe
      tree
        .instance()
        .handleTouchMove(createStartTouchEventObject({ x: 100, y: 0 }));
      expect(spyHandlePrev).not.toHaveBeenCalled();
      expect(spyHandleNext).not.toHaveBeenCalled();
    });

    it("should no swipe when swipe to bottom", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);

      const spyHandlePrev = jest.spyOn(tree.instance(), "handlePrev");
      const spyHandleNext = jest.spyOn(tree.instance(), "handleNext");

      // swipe to bottom
      tree
        .instance()
        .handleTouchStart(createStartTouchEventObject({ x: 100, y: 0 }));
      tree
        .instance()
        .handleTouchMove(createStartTouchEventObject({ x: 104, y: 20 }));
      expect(spyHandlePrev).not.toHaveBeenCalled();
      expect(spyHandleNext).not.toHaveBeenCalled();
    });

    it("should swipe on right and call handleNext", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);

      const spyHandleNext = jest.spyOn(tree.instance(), "handleNext");

      // swipe to right
      tree
        .instance()
        .handleTouchStart(createStartTouchEventObject({ x: 100, y: 0 }));
      tree
        .instance()
        .handleTouchMove(createStartTouchEventObject({ x: 20, y: 0 }));
      expect(spyHandleNext).toHaveBeenCalled();
    });

    it("should swipe on left and call handlePrev", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);

      const spyHandlePrev = jest.spyOn(tree.instance(), "handlePrev");

      // swipe to left
      tree
        .instance()
        .handleTouchStart(createStartTouchEventObject({ x: 100, y: 0 }));
      tree
        .instance()
        .handleTouchMove(createStartTouchEventObject({ x: 200, y: 0 }));
      expect(spyHandlePrev).toHaveBeenCalled();
    });

    it("should handle handleShouldStart and set touchScrollLeft state", () => {
      const tree = shallow(<Widget {...DEFAULT_PROPS} />);

      expect(tree.state().touchScrollLeft).toEqual(null);
      tree
        .instance()
        .handleTouchStart(createStartTouchEventObject({ x: 100, y: 0 }));
      expect(tree.state().touchScrollLeft).toEqual(100);
    });
  });
});
