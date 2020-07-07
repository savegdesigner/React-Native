import React from 'react'
import { Text, View } from 'react-native'

import displayStyle from './style'

export default props => {

   return (
       <View style={displayStyle.display}>
           <Text style={displayStyle.displayValue} numberOfLines={1}>
                {props.value}
           </Text>
       </View>
       
   )

}