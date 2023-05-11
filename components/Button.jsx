import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import useValueStore from "../store/value";
import getColor from "../utils/getColor";
import getIcon from "../utils/getIcon";
import getThemeColor from "../utils/colors";

export default function Button({ children, type }) {
  const { setNumber, setOperator, clear, setResult } = useValueStore(
    (state) => state
  );

  const { firstValue, mainOperator, secondValue, display } = useValueStore(
    (state) => state.value
  );

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
        setResult(String(eval(firstValue + mainOperator + secondValue)));
        break;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
      <Text style={[styles.text, { color: getColor(type) }]}>
        {getIcon(children)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    color: "white",
    backgroundColor: getThemeColor().button,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: getThemeColor().text,
    fontSize: 25,
    fontWeight: "600",
  },
});
