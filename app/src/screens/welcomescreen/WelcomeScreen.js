import React from 'react';
import {Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';
import Flags from './components/flags/Flags';
import LogoWhite from '../../../res/images/logoWhite.png';
import Background from '../../../res/images/background.png';
import Button from '../../components/button/Button';
import {styles} from './Style';
const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.img} source={Background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={LogoWhite}
            style={styles.imgLogo}
            resizeMode="contain"
          />
          <Flags />
        </View>
        <View style={styles.content}>
          <Button label="Women" type="white" size="small" />
          <Button
            label="Men"
            type="white"
            size="small"
            clicked={() => navigation.navigate('primaryNavigator')}
          />
          <View>
            <Text style={styles.tx}>
              Already have an account?
              <Text> </Text>
              <Text
                style={styles.txLogin}
                onPress={() => navigation.push('authNavigator')}>
                Login here
              </Text>
            </Text>
          </View>
          <View style={styles.txFooter}>
            <Text style={styles.tx}>Try on everything on Smart Fashion</Text>
            <Text style={styles.tx}>
              Be fashionable with our Stylish feature
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
