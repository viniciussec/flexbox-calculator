import { FontAwesome5 } from "@expo/vector-icons";
import getColor from "./getColor";

export default function getIcon(operation, size = 24) {
  switch (operation) {
    case "*":
      return <FontAwesome5 name="times" size={size} color={getColor("OPERATION")} />;
    case "/":
      return (
        <FontAwesome5 name="divide" size={size} color={getColor("OPERATION")} />
      );
    default:
      return operation;
  }
}
