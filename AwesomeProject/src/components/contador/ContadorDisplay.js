import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props => {
   return (
        <View style={style.Display}>
            <Text style={[style.DisplayText, estilo.texto]}> {props.num} </Text>
        </View>
   )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#2222',
        width: 200,
        margin: 5
    },
    DisplayText: {
        color: '#fff',
        textAlign: 'center',
    }
})