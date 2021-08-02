import React from 'react'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList' 
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
const FavouriteScreen = (props) => {
  const favMeals=useSelector(state=>state.meals.meals.favouriteMeals)
  
    return <MealList listData={favMeals} navigation={props.navigation}/>
}
FavouriteScreen.navigationOptions=navData=>{
    return{  headerTitle:'Your Favourites',
      headerLeft:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={()=>{
              navData.navigation.toggleDrawer()
          }}/>
      </HeaderButtons>)
    }
  }

export default FavouriteScreen
