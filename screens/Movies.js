import { Button, Text, View } from 'react-native';

import React from 'react';

export default Home = ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <Button title="Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
