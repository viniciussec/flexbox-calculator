import useThemeStore from "../store/theme";

const DISPLAY_COLOR_DARK = "#22252d";
const BUTTON_SECTION_COLOR_DARK = "#292d36";
const BUTTON_COLOR_DARK = "#272b33";
const TEXT_COLOR_DARK = "white";

const DISPLAY_COLOR_LIGHT = "#f2f2f2";
const BUTTON_SECTION_COLOR_LIGHT = "#e6e6e6";
const BUTTON_COLOR_LIGHT = "#d9d9d9";
const TEXT_COLOR_LIGHT = "black";

export default function getThemeColor() {
  const theme = "DARK";

  if (theme === "DARK") {
    return {
      display: DISPLAY_COLOR_DARK,
      buttonSection: BUTTON_SECTION_COLOR_DARK,
      button: BUTTON_COLOR_DARK,
      text: TEXT_COLOR_DARK,
    };
  } else {
    return {
      display: DISPLAY_COLOR_LIGHT,
      buttonSection: BUTTON_SECTION_COLOR_LIGHT,
      button: BUTTON_COLOR_LIGHT,
      text: TEXT_COLOR_LIGHT,
    };
  }
}
