import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import {Categories,MEALS} from '../data/dummy-data'
const CategoryMealScreen = (props) => {
   const catId= props.navigation.getParam('categoryId')
   const renderMealItem=itemData=>{
       return(<View><Text>{itemData.item.title}</Text></View>)
   }
  const displayMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0)
    return (
        <View style={styles.screen}>
           <FlatList data={displayMeals} keyextractor={(item,index)=>item.id} renderItem={renderMealItem}/>
        </View>
    )
}
CategoryMealScreen.navigationOptions=navigationData=>{
    const catId=navigationData.navigation.getParam('categoryId');
    const selectedCategory=Categories.find(cat=>cat.id===catId)

    return {
      headerTitle:selectedCategory.title  ,

    }
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoryMealScreen
