import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

export default props => {
   return (
       <View style={style.Botoes}>

            <Button
                style={style.btn} 
                title="Aumentar"
                onPress={props.inc}
            />

            <Button
                style={style.btn} 
                title="Diminuir"
                onPress={props.dec}
            />

       </View>
   )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    },
    btn: {
        margin: 5
    }
})