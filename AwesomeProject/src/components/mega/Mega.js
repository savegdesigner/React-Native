import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import estilo from '../estilo'
import Numero from './Numero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    constructor(props) {
        super(props)

    }

    // Arrow function -> aponta para o this do local da function
    // Function -> aponta para o this do local atual
    alterarQtdeNumero = qtde => {
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1

        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)

        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros

        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={estilo.texto}>Gerador de números</Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />

                <Button 
                    title="Gerar números"
                    onPress={this.gerarNumeros}
                />

               <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

                    {this.exibirNumeros()}

               </View>
            </>
        )

    }

}