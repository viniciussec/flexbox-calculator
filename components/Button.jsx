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

export default function Button({
  color,
  children,
  number,
  operation,
  dot,
  other,
  type,
}) {
  const value = useValueStore((state) => state.value);
  const setValue = useValueStore((state) => state.set);

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
      setValue("0");
    }

    if (operation === "PLUS") {
      setValue(value + "+");
    }

    if (operation === "MINUS") {
      setValue(value + "-");
    }

    if (operation === "TIMES") {
      setValue(value + "*");
    }

    if (operation === "DIVIDE") {
      setValue(value + "/");
    }

    if (operation === "EQUALS") {
      setValue(eval(value));
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
