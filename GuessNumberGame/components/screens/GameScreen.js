import { View, Text, StyleSheet } from "react-native";
import Title from "../Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen() {
  return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <View>
          <Title>Higher or lower?</Title>
        </View>
        <View></View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  
});
