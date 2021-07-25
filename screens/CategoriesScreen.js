import React from 'react'
import {FlatList,StyleSheet} from 'react-native'
import {Categories} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTitle'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
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
CategoriesScreen.navigationOptions=navData=>{
  return{  headerTitle:'Meal Categories',
    headerLeft:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={()=>{
            navData.navigation.toggleDrawer()
        }}/>
    </HeaderButtons>)
  }
}

export default CategoriesScreen
