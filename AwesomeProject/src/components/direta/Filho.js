import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default props => {

   return (
        <>
            <Text style={estilo.texto}>x = {props.x}</Text>
            <Text style={estilo.texto}>y = {props.y}</Text>
        </>
   )

}