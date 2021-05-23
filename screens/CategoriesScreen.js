import React from 'react'
import {TouchableOpacity,View,Text,FlatList,StyleSheet,Button,Platform} from 'react-native'
import {Categories} from '../data/dummy-data'
import Colors from '../contants/Colors'
const CategoriesScreen = (props) => {
    const renderGridItem=(itemData)=>{
        return(
            <TouchableOpacity
            style={styles.gridItem}
            onPress={()=>{
                props.navigation.navigate({routeName:'CategoryMeals',
                  params:{
                    categoryId:itemData.item.id

                }})
            }}>
             <View ><Text>{itemData.item.title}</Text></View>
          </TouchableOpacity>
        )
            }
    return (
      <FlatList data={Categories} numColumns={2} renderItem={renderGridItem} keyExtractor={(item,index)=>item.id}/>
    )
}
CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
    headerStyle:{
backgroundColor:Platform.OS==='android'?Colors.primaryColor:'white',

    },
    headerTintColor:'white'
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
})
export default CategoriesScreen
