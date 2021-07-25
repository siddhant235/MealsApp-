import React from 'react'
import { Platform } from 'react-native';
import Colors  from '../contants/Colors';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen' 
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import { Ionicons } from '@expo/vector-icons';
import DetailScreen from '../screens/DetailScreen';
import FavouriteScreen from '../screens/FavoutiteScreen'
import {createMaterialBottomTabNavigator} from  'react-navigation-material-bottom-tabs' 
import FiltersScreen from '../screens/FilterScreen'
const defaultStackNavOptions={
 
 
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor,
        headerTitle:'A screen'
    

}
const MealNavigator=createStackNavigator({
    Categories:
    {
        screen:CategoriesScreen,
             
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
       
    },
    MealDetails:DetailScreen
},{
    //    initialRouteName:'Categories',
    defaultNavigationOptions:defaultStackNavOptions
})
const FavNavigator=createStackNavigator({
    FavouriteScreen:FavouriteScreen,
    MealDetails:DetailScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
})
const tabScreenConfig={
    Meals:{screen:MealNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Colors.primaryColor
    }},
    Favourites:{screen:FavNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Colors.accentColor
    }}
}
const MealsFavTabNavigator=Platform.OS==='android'?createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:'white',
    shifting:true,
    barStyle:{
        backgroundColor:Colors.primaryColor
    }
}): createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
})

const FilterStackNavigator= createStackNavigator({
    Filters:FiltersScreen
})

const MainNavigator=createDrawerNavigator({
    MealsFavs:MealsFavTabNavigator,
    Filters:FilterStackNavigator
})
export default createAppContainer(MainNavigator);