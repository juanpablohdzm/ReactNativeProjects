import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  //React states
  const [courseGoals, setCourseGoals] = useState([]); 

  function addGoalHandler(enteredInputText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredInputText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onPress= {addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {return <GoalItem text = {itemData.item.text}/>}}
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
  goalsContainer: {
    flex: 4,
  },
  
});
