import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Categories, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
            props.navigation.navigate({routeName:'MealDetails',params:{
                mealId:itemData.item.id
            }})
        }}
      />
    );
  };
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyextractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = Categories.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealScreen;
