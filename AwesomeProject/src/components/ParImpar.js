import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default ({num = 0}) => {

    return (
            <View>

                <Text> Este número é:  </Text>
                {num % 2 === 0
                    ? <Text style={style.text}> Par </Text>
                    : <Text style={style.text}> Impar </Text>
                }

            </View>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})