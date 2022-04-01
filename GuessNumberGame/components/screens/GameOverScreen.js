import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import PrimaryButton from "../ui/PrimaryButton";
import Title from "../ui/Title";
export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style = {styles.summaryText}>
        Your phone needed <Text style = {styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style = {styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: deviceWidth*.5,
    width: deviceWidth*.7,
    height: deviceWidth*.7,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
