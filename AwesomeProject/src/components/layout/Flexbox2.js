import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
   return (
       <View style={style.flex2}> 
            <Quadrado cor="#BE5A38"/>
            <Quadrado cor="#92140C"/>
            <Quadrado cor="#2E86AB"/>
       </View>
   )
}

const style = StyleSheet.create({
    flex2: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: "space-around",
        width: '100%',
        height: 320,
        backgroundColor: "#000"
    }
})