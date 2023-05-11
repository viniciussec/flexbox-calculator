import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./components/Button";
import useValueStore from "./store/value";
import getColor from "./utils/getColor";
import getIcon from "./utils/getIcon";

export default function App() {
  const value = useValueStore((state) => state.value.display);
  const history = useValueStore((state) => state.value.history);

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        {history.mainOperator && (
          <View style={styles.history}>
            <Text style={styles.historyText}>{history.firstValue}</Text>
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
            <Text style={styles.historyText}>{history.secondValue}</Text>
          </View>
        )}
        <Text style={[styles.text, { fontSize: 50, letterSpacing: 2 }]}>
          {value}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
          <Button type="OTHER">AC</Button>
          <Button type="OTHER">
            <MaterialCommunityIcons
              name="plus-minus-variant"
              size={26}
              color={getColor("OTHER")}
            />
          </Button>
          <Button type="OTHER">
            <FontAwesome5
              name="percentage"
              size={24}
              color={getColor("OTHER")}
            />
          </Button>
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
          <Button>
            <FontAwesome name="rotate-left" size={24} />
          </Button>
          <Button type="NUMBER">0</Button>
          <Button type="DOT">.</Button>
          <Button operation="EQUALS">=</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#22252d",
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
    backgroundColor: "#292d36",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonRow: {
    flexDirection: "row",
    backgroundColor: "#292d36",
    flex: 1,
    gap: 10,
  },
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
    fontWeight: 600,
  },
  display: {
    color: "white",
    backgroundColor: "#22252d",
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
