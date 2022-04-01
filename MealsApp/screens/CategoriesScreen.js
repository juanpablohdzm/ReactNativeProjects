import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("MealsOverview");
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(itemData) => {
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
          />
        );
      }}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
