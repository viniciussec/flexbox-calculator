import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import useValueStore from "../store/value";

export function getColor(type) {
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

export default function Button({ children, operation, dot, type }) {
  const value = useValueStore((state) => state.value.display);
  const setValue = useValueStore((state) => state.setNumber);
  const setOperator = useValueStore((state) => state.setOperator);
  const clear = useValueStore((state) => state.clear);
  const setResult = useValueStore((state) => state.setResult);

  const { firstValue, mainOperator, secondValue } = useValueStore(
    (state) => state.value
  );

  function handlePress() {
    if (dot) {
      if (!value.includes(".")) {
        setValue(value + ".");
      }
    }

    if (type === "NUMBER") {
      setValue(value === "0" ? children : value + children);
    }

    if (children === "AC") {
      clear();
    }

    if (operation === "PLUS") {
      setOperator("+");
    }

    if (operation === "MINUS") {
      setOperator("-");
    }

    if (operation === "TIMES") {
      setOperator("*");
    }

    if (operation === "DIVIDE") {
      setOperator("/");
    }

    if (operation === "EQUALS") {
      console.log(firstValue + mainOperator + secondValue);
      setResult(String(eval(firstValue + mainOperator + secondValue)));
    }
  }

  return (
    <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
      <Text style={[styles.text, { color: getColor(type) }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    color: "white",
    backgroundColor: "#272b33",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
});
