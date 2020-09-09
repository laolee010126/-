import React, { useLayoutEffect } from 'react';

import Favs from '../screens/Favs';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies/index';
import { Platform } from 'react-native';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.state?.routeNames[route.state.index] || 'Movies',
    });
  }, [route]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: 'black', borderTopColor: 'black' },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Movies') {
            iconName += 'film';
          } else if (route.name === 'TV') {
            iconName += 'tv';
          } else if (route.name === 'Search') {
            iconName += 'search';
          } else if (route.name === 'Favs') {
            iconName += 'heart';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={24}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>
  );
};
