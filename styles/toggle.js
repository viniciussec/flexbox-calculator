import { StyleSheet } from "react-native";
import getThemeColor from "../utils/colors";

export default function getStyles(theme) {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      position: "absolute",
      top: 50,
      alignSelf: "center",
      borderRadius: 25,
      backgroundColor: getThemeColor(theme).button,
      padding: 13,
      paddingHorizontal: 16,
      justifyContent: "space-between",
      width: "33%",
    },
  });

  return styles;
}
