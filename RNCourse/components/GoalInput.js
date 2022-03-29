import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredInputText, setEnteredInputText] = useState("");

  function goalInputHandler(inputText) {
    setEnteredInputText(inputText);
  }

  function addGoalHandler() {
    props.onPress(enteredInputText);
    setEnteredInputText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredInputText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //Takes 1/5 of the space because goals container uses 4/5 1+4= 5
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
