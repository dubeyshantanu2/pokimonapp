import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import Styles from './style';
const HomeScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
