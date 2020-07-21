import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 42, color: '#fff' }}> {props.children} </Text>
    </View>
  );
};
