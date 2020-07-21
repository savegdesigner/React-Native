import React from 'react';
import { View, Button } from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default (props) => {
  const openDrawer = () => {
    props.navigation.openDrawer();
    // props.navigation.toggleDrawer();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#33fa92' }}>
      <TextoCentral>Tela D</TextoCentral>
      <View>
        <Button title="Abrir Drawer" onPress={openDrawer} />
      </View>
    </View>
  );
};
