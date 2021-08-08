import React from 'react'
import {View, FlatList,StyleSheet } from 'react-native'
import MealItem from "../components/MealItem";
import {useSelector} from 'react-redux'
const MealList=(props)=>{
  const favouriteMeals=useSelector(state=>state.meals.favouriteMeals)
    const renderMealItem = (itemData) => {
      const isFavourite=favouriteMeals.some(meal=>meal.id===itemData.item.id)
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({routeName:'MealDetails',params:{
                    mealId:itemData.item.id,
                    mealTitle:itemData.item.title,
                    isFav:isFavourite
                }})
            }}
          />
        );
      };

   return <View style={styles.screen}>
    <FlatList
      data={props.listData}
      keyextractor={(item, index) => item.id}
      renderItem={renderMealItem}
    />
  </View>
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default MealList;