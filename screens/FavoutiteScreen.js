import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {MEALS} from '../data/dummy-data'
import MealList from '../components/MealList' 
const FavouriteScreen = (props) => {
    const favMeals=MEALS.filter(meal=>meal.id==='m1' || meal.id==='m2')
    return <MealList listData={favMeals} navigation={props.navigation}/>
}
FavouriteScreen.navigationOptions={
    headerTitle:'Your Favourites'
}

export default FavouriteScreen
