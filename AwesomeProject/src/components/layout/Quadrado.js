import React from 'react'
import { View } from 'react-native'

export default props => {
   return (
       <View 
            style={{
                width: 50,
                height: 50,
                backgroundColor: props.cor || '#ccc'
            }}

       />
   )
}