import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import estilo from '../estilo'

export default props => {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

   return (

    <>

        <Text style={estilo.texto}>{num}</Text>

        <Filho 
            min={1} 
            max={10} 
            funcao={exibirValor}
        />

    </>

   )
}