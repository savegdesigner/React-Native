import React from 'react'
import { Text, Platform } from 'react-native'

export default props => {

    if(Platform.OS === 'ios')
        return <Text> Plataforma iOS </Text>
    return <Text> Plataforma Android </Text>

}