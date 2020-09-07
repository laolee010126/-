import * as Font from 'expo-font';

import { Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
const cacheFonts = (fonts) => {
  fonts.map((font) => {
    return Font.loadAsync(font);
  });
};
console.log(Ionicons.font);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssest = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    console.log(fonts);

    return Promise.all([...images]);
  };
  const onFinish = () => {
    setIsReady(true);
  };
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssest}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
