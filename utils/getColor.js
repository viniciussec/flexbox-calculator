export default function getColor(type) {
    switch (type) {
      case "NUMBER":
        return "white";
      case "DOT":
        return "white";
      case "OPERATION":
        return "#d45f60";
      case "OTHER":
        return "#26f7d2";
      default:
        return "white";
    }
  }