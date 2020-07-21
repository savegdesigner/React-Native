import React from 'react';
import { SafeAreaView } from 'react-native';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

export default (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TelaA corFundo="#CC2936" />

      <TelaB corFundo="#08415C" />

      <TelaC corFundo="#EBBAB9" />
    </SafeAreaView>
  );
};
