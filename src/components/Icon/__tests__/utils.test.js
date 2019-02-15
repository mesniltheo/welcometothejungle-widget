import { color } from "../utils.js";
import { colors } from "./../../../config";

describe("color method", () => {
  it("should return an white color when called with the white param", () => {
    expect(color("white")).toEqual(colors.white);
  });

  it("should return a dynamic color when called with an other param", () => {
    expect(color("black")).toEqual("black");
  });
});
