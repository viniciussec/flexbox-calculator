import getThemeColor from "./colors";

export default function getColor(type, theme) {
  switch (type) {
    case "NUMBER":
      return getThemeColor(theme).text;
    case "DOT":
      return getThemeColor(theme).text;
    case "RETURN":
      return getThemeColor(theme).text;
    case "OPERATION":
      return "#d45f60";
    case "EQUALS":
      return "#d45f60";
    default:
      return "#26f7d2";
  }
}
