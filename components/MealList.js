import React from 'react'
import {View, FlatList,StyleSheet } from 'react-native'
import MealItem from "../components/MealItem";
const MealList=(props)=>{
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