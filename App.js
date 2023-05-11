import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import useValueStore from "./store/value";
import getColor from "./utils/getColor";
import getIcon from "./utils/getIcon";
import getThemeColor from "./utils/colors";

export default function App() {
  const value = useValueStore((state) => state.value.display);
  const history = useValueStore((state) => state.value.history);

  function capNumber(number) {
    if (number.length > 9) {
      return number.substring(0, 9) + "...";
    } else {
      return number;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        {history.mainOperator && (
          <View style={styles.history}>
            <Text style={styles.historyText}>
              {capNumber(history.firstValue)}
            </Text>
            <Text
              style={[
                styles.historyText,
                {
                  color: getColor("OPERATION"),
                },
              ]}
            >
              {getIcon(history.mainOperator, 15)}
            </Text>
            <Text style={styles.historyText}>
              {capNumber(history.secondValue)}
            </Text>
          </View>
        )}
        <Text style={[styles.text, { fontSize: 50, letterSpacing: 2 }]}>
          {capNumber(value)}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
          <Button type="CLEAR">AC</Button>
          <Button type="INVERT">+/-</Button>
          <Button type="PERCENTAGE">%</Button>
          <Button type="OPERATION">/</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button type="NUMBER">7</Button>
          <Button type="NUMBER">8</Button>
          <Button type="NUMBER">9</Button>
          <Button type="OPERATION">*</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button type="NUMBER">4</Button>
          <Button type="NUMBER">5</Button>
          <Button type="NUMBER">6</Button>
          <Button type="OPERATION">-</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button type="NUMBER">1</Button>
          <Button type="NUMBER">2</Button>
          <Button type="NUMBER">3</Button>
          <Button type="OPERATION">+</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button type="RETURN">{"<-"}</Button>
          <Button type="NUMBER">0</Button>
          <Button type="DOT">.</Button>
          <Button type="EQUALS">=</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: getThemeColor().display,
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
    backgroundColor: getThemeColor().buttonSection,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonRow: {
    flexDirection: "row",
    backgroundColor: getThemeColor().buttonSection,
    flex: 1,
    gap: 10,
  },
  button: {
    flex: 1,
    color: "white",
    backgroundColor: getThemeColor().button,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: 600,
  },
  display: {
    color: "white",
    backgroundColor: getThemeColor().display,
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
    color: "white",
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 2,
  },
});
