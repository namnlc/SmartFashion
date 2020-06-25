import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Flags from './components/flags/Flags';
import welcome from '../../../res/images/welcome.png';
import {Sex} from '../../components/sex/Sex';

let {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Flags />
        <View>
          <Image style={styles.img} source={welcome} resizeMode="contain" />
        </View>
        <Text style={styles.txt}>Smarten up your Style!</Text>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.btn}
          onPress={() => navigation.navigate('defaultModel')}>
          <Text style={styles.txtStart}>Start</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.txt2}>Try on everything on Smart Fashion</Text>
          <Text style={styles.txt2}>
            Be fashionable with our Stylish feature
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#098FA8',
    borderRadius: 25,
    //marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2,
    height: '8%',
  },
  txt: {
    fontFamily: 'Optima',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtStart: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Optima',
  },
  img: {
    resizeMode: 'contain',
    width: width,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  txt2: {
    fontSize: 15,
    fontFamily: 'Optima',
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default WelcomeScreen;
