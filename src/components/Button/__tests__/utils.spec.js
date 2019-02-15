import { getBackgroundHover } from "../utils.js";
import { colors } from "./../../../config";

describe("getBackgroundHover method", () => {
  it("should return greyLight color when called with the grey param", () => {
    expect(getBackgroundHover({color: "grey"})).toEqual(colors.greyLight);
  });

  it("should return greenLight color when called with other param", () => {
    expect(getBackgroundHover({color: ""})).toEqual(colors.greenLight);
  });
});
