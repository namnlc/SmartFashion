import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Flags from './components/flags/Flags';
import welcome from '../../../res/images/welcome.png';
import {useStores} from '../../stores/Store';
const WelcomeScreen = ({navigation}) => {
  const {signStore} = useStores();
  console.log(signStore.count);
  React.useEffect(() => {
    signStore.decrement();
    console.log(signStore.count);
  }, [signStore]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Flags />
        <View style={styles.body}>
          <View style={styles.img}>
            <Image source={welcome} resizeMode="contain" />
            <Text style={styles.txt}>Smarten up your Style!</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.btn}
              onPress={() => navigation.navigate('defaultModel')}>
              <Text style={styles.txtStart}>Start</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.txt2}>Try on everything on Smart Fashion</Text>
            <Text style={styles.txt2}>
              Be fashionable with our Stylish feature
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    position: 'relative',
  },
  btn: {
    backgroundColor: '#098FA8',
    borderRadius: 25,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 184,
  },
  txt: {
    // fontFamily:'poppins',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtStart: {
    color: '#fff',
    fontSize: 16,
  },
  img: {
    marginTop: 0,
    top: Platform.OS === 'android' ? 50 : null,
    aspectRatio: 3 / 4,
  },

  txt2: {
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default WelcomeScreen;
