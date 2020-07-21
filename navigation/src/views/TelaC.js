import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View } from 'react-native';

export default (props) => {
  const route = props.route.params ? props.route.params : 0;

  return (
    <View style={{ flex: 1, backgroundColor: '#EBBAB9' }}>
      <TextoCentral>
        Tela C - {route.numero ? route.numero : route}
      </TextoCentral>
    </View>
  );
};
