import React from 'react';
import {
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
const {width: w, height: h} = Dimensions.get('window');
const test = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{width: w, height: h / 3, backgroundColor: 'red'}} />
        <View style={{width: w, height: h / 3, backgroundColor: 'blue'}} />
        <View style={{width: w, height: h / 3, backgroundColor: 'green'}} />
        <View style={{width: w, height: h / 3, backgroundColor: 'gray'}} />
        <View style={{width: w, height: h / 3, backgroundColor: 'white'}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default test;
