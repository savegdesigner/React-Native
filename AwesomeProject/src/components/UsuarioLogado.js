import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'
import If from './If'

export default props => {

    const { usuario } = props || {}

   return (
       <>
        <If teste={usuario && usuario.nome && usuario.email}>

            <Text style={estilo.texto}> Usuário Logado: </Text>
            <Text> {usuario.nome} - {usuario.email} </Text>

        </If>
       </>
   )
}