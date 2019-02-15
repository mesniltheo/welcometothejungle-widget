import { colors } from "./../../config";

export const color = color => {
  switch (color) {
    case "white":
      return colors.white;
    default:
      return `${color}`;
  }
};
