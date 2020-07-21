import React from 'react';
import { View, Button } from 'react-native';

export default (props) => {
  // push(screen) navigate(screen) goBack()
  btnAvancar = () => {
    // props.navigation.navigate(props.avancar);

    props.navigation.push(props.avancar, {
      numero: parseInt(Math.random() * 100),
    });
  };

  btnVoltar = () => {
    props.navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {props.avancar ? (
          <Button title="Avançar" onPress={btnAvancar} />
        ) : (
          false
        )}

        {props.voltar ? <Button title="Voltar" onPress={btnVoltar} /> : false}
      </View>

      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};
