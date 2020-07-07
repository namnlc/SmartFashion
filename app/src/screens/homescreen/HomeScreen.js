import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderHome from './components/Header';
import {styles} from './components/Style';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
    </SafeAreaView>
  );
};

export default HomeScreen;
