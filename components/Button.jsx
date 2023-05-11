import React from "react";
import { Text, TouchableOpacity } from "react-native";
import useValueStore from "../store/value";
import getColor from "../utils/getColor";
import getIcon from "../utils/getIcon";
import getStyles from "../styles/button";
import useThemeStore from "../store/theme";

export default function Button({ children, type }) {
  const theme = useThemeStore((state) => state.theme);
  const styles = getStyles(theme);

  const { setNumber, setOperator, clear, setResult, block } = useValueStore(
    (state) => state
  );

  const { firstValue, mainOperator, secondValue, display, blocked } =
    useValueStore((state) => state.value);

  function handlePress() {
    switch (type) {
      case "NUMBER":
        setNumber(display === "0" ? children : display + children);
        break;
      case "OPERATION":
        setOperator(children);
        break;
      case "CLEAR":
        clear();
        break;
      case "PERCENTAGE":
        setResult(String(eval(display) / 100));
        break;
      case "INVERT":
        setNumber(eval(display) * -1);
        break;
      case "RETURN":
        setNumber(display.slice(0, -1));
      case "DOT":
        if (!display.includes(".")) {
          setNumber(display + ".");
        }
        break;
      case "EQUALS":
        if (!mainOperator) return setResult(firstValue);
        if (mainOperator === "/" && secondValue === "0") {
          setResult("Erro");
          return block();
        }
        setResult(String(eval(firstValue + mainOperator + secondValue)));
        break;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity
      disabled={blocked && type !== "CLEAR"}
      onPress={() => handlePress()}
      style={styles.button}
    >
      <Text style={[styles.text, { color: getColor(type, theme) }]}>
        {getIcon(children)}
      </Text>
    </TouchableOpacity>
  );
}
