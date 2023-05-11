import { FontAwesome5 } from "@expo/vector-icons";
import getColor from "./getColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function getIcon(operation, size = 24) {
  switch (operation) {
    case "<-":
      return <FontAwesome name="rotate-left" size={24} />;
    case "*":
      return (
        <FontAwesome5 name="times" size={size} color={getColor("OPERATION")} />
      );
    case "/":
      return (
        <FontAwesome5 name="divide" size={size} color={getColor("OPERATION")} />
      );
    case "%":
      return (
        <FontAwesome5 name="percentage" size={size} color={getColor("OTHER")} />
      );
    case "+/-":
      return (
        <MaterialCommunityIcons
          name="plus-minus-variant"
          size={size}
          color={getColor("OTHER")}
        />
      );
    default:
      return operation;
  }
}
