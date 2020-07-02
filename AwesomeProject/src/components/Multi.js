import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default function Comp1() {
    return <Text style={estilo.texto}>Comp 01</Text>
}

function Comp2() {
    return <Text style={estilo.texto}>Comp 02</Text>
}

export function Comp3() {
    return <Text style={estilo.texto}>Comp 03</Text>
}

export { Comp2 }