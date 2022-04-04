import { StyleSheet, Text, View, Image } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
