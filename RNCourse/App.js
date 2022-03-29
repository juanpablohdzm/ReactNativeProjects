import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={customStyle.dummyText}>Another piece of text</Text>
      </View>
      <Text style={customStyle.dummyText}>Hello World!</Text>
      <Button title="click me!" />
    </View>
  );
}

const customStyle = StyleSheet.create({
  dummyText: { margin: 16, borderWidth: 3, borderColor: "red", padding: 16 },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
