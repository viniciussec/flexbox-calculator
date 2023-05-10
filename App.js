import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View style={styles.history}>
          <Text style={styles.historyText}>308</Text>
          <Text style={styles.historyText}>
            <FontAwesome5 name="times" size={15} color="#d45f60" />
          </Text>
          <Text style={styles.historyText}>42</Text>
        </View>
        <Text style={[styles.text, { fontSize: 50, letterSpacing: 2 }]}>
          12936
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
          <Button color="#26f7d2">AC</Button>
          <Button color="#26f7d2">
            <MaterialCommunityIcons
              name="plus-minus-variant"
              size={26}
              color="#26f7d2"
            />
          </Button>
          <Button color="#26f7d2">
            <FontAwesome5 name="percentage" size={24} color="#26f7d2" />
          </Button>
          <Button color="#d45f60">
            <FontAwesome5 name="divide" size={24} color="#d45f60" />
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button color="white">7</Button>
          <Button color="white">8</Button>
          <Button color="white">9</Button>
          <Button color="#d45f60">
            <FontAwesome5 name="times" size={24} color="#d45f60" />
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button color="white">4</Button>
          <Button color="white">5</Button>
          <Button color="white">6</Button>
          <Button color="#d45f60">-</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button color="white">1</Button>
          <Button color="white">2</Button>
          <Button color="white">3</Button>
          <Button color="#d45f60">+</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button color="white">
            <FontAwesome name="rotate-left" size={24} color="white" />
          </Button>
          <Button color="white">0</Button>
          <Button color="white">.</Button>
          <Button color="#d45f60">=</Button>
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
