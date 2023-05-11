export default function getColor(type) {
  switch (type) {
    case "NUMBER":
      return "white";
    case "DOT":
      return "white";
    case "RETURN":
      return "white";
    case "OPERATION":
      return "#d45f60";
    case "EQUALS":
      return "#d45f60";
    default:
      return "#26f7d2";
  }
}
