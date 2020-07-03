import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

// Components
// import Primeiro from './components/Primeiro'
// import Comp1, { Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// // import Pai from './components/direta/Pai'
// // import Pai from './components/indireta/Pai'
// import Contador2 from './components/contador/Contador2'
// import Plataforma from './components/Plataformas'
// import ParImpar from './components/ParImpar'
// import Pai from './components/relacao/Pai'
// import Filho from './components/relacao/Filho'
// import UsuarioLogado from './components/UsuarioLogado'
// import If from './components/If'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutos2 from './components/produtos/ListaProdutos2'
// import ControlledComponent from './components/ControlledComponent'
// import Flexbox from './components/layout/Flexbox'
// import Flexbox2 from './components/layout/Flexbox2'

export default () => {

    return (
        <SafeAreaView style={styles.App}>

            {/* <Flexbox2 /> */}
            {/* <Flexbox /> */}
            {/* <ControlledComponent /> */}
            {/* <ListaProdutos2 /> */}
            {/* <ListaProdutos /> */}
            {/* <If teste={true}>
                <UsuarioLogado usuario={ {nome: 'Vini', email: 'vinisave@gmail.com'} }/>
                <UsuarioLogado usuario={ {nome: 'Bia'} }/>
            </If> */}
            {/* <Pai>
                <Filho nome="Bia" sobrenome="Silva"/>
                <Filho nome="Vini" sobrenome="Silva"/>
            </Pai> */}
            {/* <ParImpar num={2}/> */}
            {/* <Plataforma /> */}
            {/* <Contador2 /> */}
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