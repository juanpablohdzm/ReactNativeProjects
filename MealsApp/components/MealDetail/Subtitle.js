import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}) {
  return (
    <View>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#f5d2bc",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#f5d2bc",
    borderBottomWidth: 4,
  },
});
