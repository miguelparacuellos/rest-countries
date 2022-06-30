import { DefaultTheme } from "styled-components";
import appColors from "./appColors";

export const LightMode: DefaultTheme = {
  colors: {
    text: appColors.semiDarkStone,
    input: appColors.darkGray,
    background: appColors.lightGray,
    elements: appColors.white,
  },
};

export const DarkMode: DefaultTheme = {
  colors: {
    elements: appColors.stone,
    background: appColors.darkStone,
    text: appColors.white,
  },
};
