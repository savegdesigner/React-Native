import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

// Components
import Primeiro from './components/Primeiro'
import Comp1, { Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'

export default () => {

    return (
        <SafeAreaView style={styles.App}>

            {/* <Pai /> */}
            {/* <Contador inicial={1} passo={2}/> */}
            {/* <Botao /> */}
            {/* <Titulo principal="Cadastro Produto" secundario="Cadastro de Clientes"/> */}
            {/* <Aleatorio min={0} max={10}/> */}
            {/* <MinMax min={1} max={30}/> */}
            {/* <Comp1 style={styles.Text}/>
            <Comp2 />
            <Primeiro /> */}

        </SafeAreaView>
    )   

}

const styles = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#BEB2C8'
    }
})