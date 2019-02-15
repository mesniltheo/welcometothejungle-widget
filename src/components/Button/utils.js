import { colors } from "../../config";

export const getBackgroundHover = ({ color }) => {
  switch (color) {
    case "grey":
      return colors.greyLight;
    default:
      return colors.greenLight;
  }
};
