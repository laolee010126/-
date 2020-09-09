import Detail from '../screens/Detail';
import React from 'react';
import Tabs from './Tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          shadowColor: 'black',
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
