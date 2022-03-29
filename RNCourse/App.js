import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredInputText, setEnteredInputText] = useState(""); //React states
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(inputText) {
    setEnteredInputText(inputText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredInputText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

//Text for iphone doesn't contain rounded corners, you need a wrapper.

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //Takes all the space available
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white", //There is no cascade styling.
  },
});
