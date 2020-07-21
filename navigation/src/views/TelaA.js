import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View } from 'react-native';
import PassoStack from '../components/PassoStack';

export default (props) => {
  // props.navigation.navigate('TelaB');

  return (
    // Send Parent Navigation Props to Child Component {...props}
    // <PassoStack {...props} avancar="TelaB">
    // <View style={{ flex: 1, backgroundColor: '#CC2936' }}>
    //   <TextoCentral>Tela A</TextoCentral>
    // </View>
    // </PassoStack>

    <View style={{ flex: 1, backgroundColor: '#CC2936' }}>
      <TextoCentral>Tela A</TextoCentral>
    </View>
  );
};
