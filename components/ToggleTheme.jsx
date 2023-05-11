import React from "react";
import { TouchableOpacity } from "react-native";
import useThemeStore from "../store/theme";
import { Feather } from "@expo/vector-icons";
import getStyles from "../styles/toggle";

export default function ToggleTheme({ children }) {
  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggle);

  const styles = getStyles(theme);

  return (
    <TouchableOpacity onPress={toggle} style={styles.button}>
      <Feather
        name="sun"
        size={24}
        color={theme === "DARK" ? "#aaa" : "black"}
      />
      <Feather
        name="moon"
        size={24}
        color={theme === "DARK" ? "white" : "#ccc"}
      />
    </TouchableOpacity>
  );
}
