import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary400, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgorundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgorundImage: {
    opacity: 0.15,
  },
});
