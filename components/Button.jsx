import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import useValueStore from "../store/value";
import getColor from "../utils/getColor";
import getIcon from "../utils/getIcon";

export default function Button({ children, operation, dot, type }) {
  const { setNumber, setOperator, clear, setResult } = useValueStore(
    (state) => state
  );

  const { firstValue, mainOperator, secondValue, display } = useValueStore(
    (state) => state.value
  );

  function handlePress() {
    if (type === "DOT") {
      if (!display.includes(".")) {
        setNumber(display + ".");
      }
    }

    if (type === "NUMBER") {
      setNumber(display === "0" ? children : display + children);
    }

    if (children === "AC") {
      clear();
    }

    if (type === "OPERATION") {
      setOperator(children);
    }

    if (operation === "EQUALS") {
      setResult(String(eval(firstValue + mainOperator + secondValue)));
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
