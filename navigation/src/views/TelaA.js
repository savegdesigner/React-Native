import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View } from 'react-native';

export default (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: props.corFundo }}>
      <TextoCentral>Tela A</TextoCentral>
    </View>
  );
};
