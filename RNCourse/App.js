import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
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
      {text:enteredInputText, id: Math.random().toString()},
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
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={{ color: "white" }}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor = {item => {return item.id}}
        />
      </View>
    </View>
  );
}

/////Notes
//Text for iphone doesn't contain rounded corners, you need a wrapper.
//<ScrollView></ScrollView>  renders independently if the item is shown or not

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
