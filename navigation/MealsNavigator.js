import React from 'react'
import { Platform } from 'react-native';
import Colors  from '../contants/Colors';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator,createBo} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen' 
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import { Ionicons } from '@expo/vector-icons';
import DetailScreen from '../screens/DetailScreen';
import FavouriteScreen from '../screens/FavoutiteScreen'

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
    defaultNavigationOptions:{
 
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor
        
    }
})
const MealsFavTabNavigator=createBottomTabNavigator({
    Meals:{screen:MealNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        }
    }},
    Favourites:{screen:FavouriteScreen,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        }
    }}
},{
    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
})
export default createAppContainer(MealsFavTabNavigator);