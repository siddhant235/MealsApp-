import React from 'react'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList' 
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View,Text,StyleSheet } from 'react-native'
const FavouriteScreen = (props) => {
  const favMeals=useSelector(state=>state.meals.favouriteMeals)
  if(favMeals.length==0 || !favMeals){
    <View style={styles.content}>
      <Text>No Favourites meals found. Start Adding some</Text>
    </View>
  }
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

  const styles=StyleSheet.create({
    content:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
export default FavouriteScreen
