import { StyleSheet } from "react-native";
import getThemeColor from "../utils/colors";

export default function getStyles(theme) {
  const styles = StyleSheet.create({
    button: {
      flex: 1,
      color: "white",
      backgroundColor: getThemeColor(theme).button,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: getThemeColor(theme).text,
      fontSize: 25,
      fontWeight: "600",
    },
  });

  return styles;
}
