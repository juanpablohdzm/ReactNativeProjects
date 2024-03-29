import { View, Text, StyleSheet, Platform } from "react-native";


export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: "center",
    borderColor: 'white',
    maxWidth: '80%',
    width: 300,
    padding: 12,
  },
});
