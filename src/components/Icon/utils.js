import { colors } from "./../../config";

export const color = color => {
  switch (color) {
    case "white":
      return colors.white;
    case "green":
      return colors.green;
    default:
      return `${color}`;
  }
};
