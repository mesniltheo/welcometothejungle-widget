import React from "react";
import { shallow } from "enzyme";
import Widget from "./";

it("renders without crashing", () => {
  shallow(<Widget />);
});
