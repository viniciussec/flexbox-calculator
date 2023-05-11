import { StyleSheet } from "react-native";
import getThemeColor from "../utils/colors";

export default function getStyles(theme) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: getThemeColor(theme).display,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flex: 1,
    },
    buttonSection: {
      flexDirection: "column",
      flex: 6,
      width: "100%",
      gap: 10,
      backgroundColor: getThemeColor(theme).buttonSection,
      paddingVertical: 25,
      paddingHorizontal: 20,
      borderRadius: 30,
    },
    buttonRow: {
      flexDirection: "row",
      backgroundColor: getThemeColor(theme).buttonSection,
      flex: 1,
      gap: 10,
    },
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
      fontWeight: 600,
    },
    display: {
      color: getThemeColor(theme).text,
      backgroundColor: getThemeColor(theme).display,
      flex: 4,
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      padding: 20,
    },
    history: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 10,
      gap: 8,
    },
    historyText: {
      color: getThemeColor(theme).text,
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 2,
    },
  });

  return styles;
}
