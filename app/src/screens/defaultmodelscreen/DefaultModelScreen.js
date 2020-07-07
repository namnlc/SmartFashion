import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import ToggleModel from './components/togglemodel/ToggleModel';

function DefaultModel() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.txtDef}>
        First of all, let's create your own model!
      </Text>
      <ToggleModel />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  txtDef: {
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default DefaultModel;
