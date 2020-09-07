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
// function loadAsync(fontFamilyOrFontMap: string | {
//   [fontFamily: string]: Font.FontSource;
// }, source?: Font.FontSource): Promise<void>
// 파라미터에 들어가는 fonts는 font객체로 이루어진 배열입니다
const cacheFonts = (fonts) => {
  fonts.map((font) => {
    return Font.loadAsync(font);
  });
};
console.log(Ionicons.font);
// log 결과값
// Object {
//   "ionicons": 11,
// }

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssest = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    console.log(fonts);
    // log 결과값
    // undefined
    // cacheFonts
    // 원하던 결과값
    // [promise객체]
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
