import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default ({num}) => {
   return (
       <View style={style.container}>
            <Text style={style.num}> 
                {num}
            </Text>
       </View>
   )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#212121',
        margin: 5,
        borderRadius: 25,
    },
    num: {
        color: '#fff',
        textAlign: 'center'
    }
})