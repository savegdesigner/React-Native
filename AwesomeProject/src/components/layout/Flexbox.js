import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
   return (
       <View style={style.flex1}> 
            <Quadrado cor="#BE5A38"/>
            <Quadrado cor="#92140C"/>
            <Quadrado cor="#2E86AB"/>
       </View>
   )
}

const style = StyleSheet.create({
    flex1: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: "#000"
    }
})