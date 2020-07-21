import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen
        name="TelaA"
        component={TelaA}
        options={{ title: 'Primeira Tela' }}
      /> */}

      <Stack.Screen name="TelaA" options={{ title: 'Primeira Tela' }}>
        {(props) => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaB">
        {(props) => (
          <PassoStack {...props} avancar="TelaC" voltar>
            <TelaB />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaC" options={{ title: 'Terceira Tela' }}>
        {(props) => (
          <PassoStack {...props} avancar="TelaC" voltar>
            <TelaC {...props} />
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
