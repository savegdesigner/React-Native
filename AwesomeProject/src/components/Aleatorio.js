import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => {

    const {min, max} = props
    let delta = max - min + 1

    let numeroAleatorio = parseInt(Math.random() * delta) + min

    // console.warn(numeroAleatorio)

    return (
        <Text style={estilo.texto}>Número Aleatório: {numeroAleatorio}</Text>
    )

}