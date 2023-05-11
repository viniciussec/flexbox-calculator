import getThemeColor from "./colors";

export default function getColor(type) {
  switch (type) {
    case "NUMBER":
      return getThemeColor().text;
    case "DOT":
      return getThemeColor().text;
    case "RETURN":
      return getThemeColor().text;
    case "OPERATION":
      return "#d45f60";
    case "EQUALS":
      return "#d45f60";
    default:
      return "#26f7d2";
  }
}
