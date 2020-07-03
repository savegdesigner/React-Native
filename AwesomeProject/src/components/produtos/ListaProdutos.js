import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {
   return (
       <>
            <Text style={estilo.texto}> Lista de produtos: </Text>

            {produtos.map(produto => <Text key={produto.id}>{produto.nome}</Text>)}
       </>
   )
}