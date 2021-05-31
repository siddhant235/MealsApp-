import React from 'react'
import {FlatList,StyleSheet} from 'react-native'
import {Categories} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTitle'
const CategoriesScreen = (props) => {
    const renderGridItem=(itemData)=>{
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=>{
            props.navigation.navigate({
                routeName:'CategoryMeals',
                params:{
                    categoryId:itemData.item.id
                }
            })
        }}/>
            }
    return (
      <FlatList data={Categories} numColumns={2} renderItem={renderGridItem} keyExtractor={(item,index)=>item.id}/>
    )
}
CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
 
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
  
})
export default CategoriesScreen
