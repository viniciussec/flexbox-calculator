import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Button({ color, children }) {
  return (
    <View style={styles.button}>
      <Text style={[styles.text, { color: color }]}>{children}</Text>
    </View>
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
    fontWeight: '600',
  },
});
