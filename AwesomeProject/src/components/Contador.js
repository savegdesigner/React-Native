import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'

export default ({inicial=0, passo=1}) => {

    // let numero = props.inicial

    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <>

            <Text style={estilo.texto}>{numero}</Text>
            <Button 
                title="Aumentar"
                onPress={inc}
            />
            <Button 
                title="Diminuir"
                onPress={dec}
            />

        </>
    )

}