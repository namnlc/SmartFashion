import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import {styles} from './components/Style';
const StylishScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};
export default StylishScreen;
