import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen' 
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import DetailScreen from '../screens/DetailScreen';

const MealNavigator=createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetails:DetailScreen
})
export default createAppContainer(MealNavigator);