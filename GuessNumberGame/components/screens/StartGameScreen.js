import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Colors from "../../constants/colors";

export default function StartGameScreen(props) {
  const [number, setNumber] = useState("");

  function numberInputHandler(inputText) {
    setNumber(inputText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickedNumber(chosenNumber);
  }

  function resetInputHandler() {
    setNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={number}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", //Main axis in this case vertical
    alignItems: "center", //Secondary axis in this case horizontal
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, //Android specific shadow
    //iOS specific shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
});
