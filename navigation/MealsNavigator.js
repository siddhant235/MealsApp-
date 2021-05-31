import { Platform } from 'react-native';
import Colors  from '../contants/Colors';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen' 
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import DetailScreen from '../screens/DetailScreen';

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
export default createAppContainer(MealNavigator);