import React, { useLayoutEffect } from 'react';

import Favs from '../screens/Favs';
import Movies from '../screens/Movies';
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
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favs" component={Favs} />
    </Tab.Navigator>
  );
};
