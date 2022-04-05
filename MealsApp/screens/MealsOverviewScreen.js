import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    ///Happens simultaneously when rendering this component
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
