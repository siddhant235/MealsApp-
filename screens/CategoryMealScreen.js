import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const CategoryMealScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The category Meal Screen!</Text>
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
