import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
const MealItem=props=>{
return(
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.mealRow}>
            <Text>{itemData.item.title} </Text>
            <View style={styles.mealRow}>

                </View>
            </View>
            
        </TouchableOpacity>
        </View>
)
}
const styles=StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc'
    },

})
export default MealItem;