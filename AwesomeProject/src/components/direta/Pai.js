import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default props => {

    let x = 10
    let y = 20

   return (
        <>
            <Filho x={x} y={y}> Functional Component </Filho>
        </>
   )

}