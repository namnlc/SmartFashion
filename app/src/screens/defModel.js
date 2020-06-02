import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import ToggleModel from '../components/toggleModel';
import wel2 from '../../res/images/welcome/welcome2.png';
import wel3 from '../../res/images/welcome/welcome3.png';

const { width, height } = Dimensions.get('window');

const renderPhoto = () => (
  <View>
    <Image source={wel2} />
  </View>
);

const renderModel = () => (
  <View>
    <Image source={wel3} />
  </View>
);

const defModel = ({navigation}) => {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={{fontWeight:'bold',fontSize:15,paddingTop:40,paddingBottom:20}}>
          First of all, let's create your own model!
        </Text>
        <ToggleModel>
          </ToggleModel>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  safe: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default defModel;
