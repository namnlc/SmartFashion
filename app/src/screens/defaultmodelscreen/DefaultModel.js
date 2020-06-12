import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import ToggleModel from './components/togglemodel/ToggleModel';

const DefaultModel = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.txtDef}>
        First of all, let's create your own model!
      </Text>
      <ToggleModel />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  txtDef: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 40,
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export default DefaultModel;
