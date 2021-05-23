import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
const DetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Detail Screen!</Text>
            <Button title="Go to Categories" onPress={()=>{
                props.navigation.popToTop();
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
export default DetailScreen
