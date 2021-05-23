import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import {Categories} from '../data/dummy-data'
const CategoryMealScreen = (props) => {
   const catId= props.navigation.getParam('categoryId')
   const selectedCat=Categories.find(cat=>cat.id===catId)
    return (
        <View style={styles.screen}>
            <Text>The category Meal Screen!</Text>
            <Text>{selectedCat.title}</Text>
            <Button title="Go to details" onPress={()=>{
                props.navigation.navigate('MealDetails')
            }}/>
             <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
                //props.navigaton.pop() can also be used in Stacknavigator
                
            }}/>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoryMealScreen
