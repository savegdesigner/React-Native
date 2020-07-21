import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'TelaA':
              iconName = focused ? 'moon-outline' : 'moon-outline';
              break;
            case 'TelaB':
              iconName = focused ? 'layers-outline' : 'layers-outline';
              break;
            case 'TelaC':
              iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#222',
        inactiveTintColor: '#ccc',
        showLabel: true,
        // labelStyle: { fontSize: 30 },
      }}
      initialRouteName="TelaA">
      <Tab.Screen
        name="TelaA"
        component={TelaA}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen name="TelaB" component={TelaB} options={{ title: 'Meio' }} />
      <Tab.Screen name="TelaC" component={TelaC} options={{ title: 'Final' }} />
    </Tab.Navigator>
  );
};
