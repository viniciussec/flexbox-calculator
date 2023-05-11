import { Text, View } from "react-native";
import Button from "./components/Button";
import useValueStore from "./store/value";
import getColor from "./utils/getColor";
import getIcon from "./utils/getIcon";
import getStyles from "./styles/app";
import useThemeStore from "./store/theme";
import ToggleTheme from "./components/ToggleTheme";

export default function App() {
  const styles = getStyles(useThemeStore((state) => state.theme));
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
        <ToggleTheme />
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
          <Button type="CLEAR">{value != 0 ? "C" : "AC"}</Button>
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
