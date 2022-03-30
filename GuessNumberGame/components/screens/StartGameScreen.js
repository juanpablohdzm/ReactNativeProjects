import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style= {styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#72063c',
    elevation: 4, //Android specific shadow
    //iOS specific shadow
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
