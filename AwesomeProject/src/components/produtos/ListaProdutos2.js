import React from 'react'
import { Text, FlatList } from 'react-native'
import produtos from './produtos'
import estilo from '../estilo'

export default props => {

    const renderProduto = ({item: produto}) => {
        return <Text>{produto.nome} - R$ {produto.preco}</Text>
    }

   return (
       <>
            <Text style={estilo.titulo}> Lista de Produtos 2 </Text>

            <FlatList 
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={renderProduto}
            />
       </>
   )
}