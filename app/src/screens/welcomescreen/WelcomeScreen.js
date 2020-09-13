import React from 'react';
import {View, SafeAreaView, Image, ImageBackground} from 'react-native';
import Flags from './components/flags/Flags';
import LogoWhite from '../../../res/images/logoWhite.png';
import Background from '../../../res/images/background.png';
import Button from '../../components/button/Button';
import Text from '../../components/text/Text';
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
          <Button label="Women" type="white" upper="upper" />
          <Button
            label="Men"
            type="white"
            upper="upper"
            clicked={() => navigation.navigate('primaryNavigator')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text label="Already have an account? " />
            <Text
              clicked={() => navigation.push('authNavigator')}
              type="large"
              label="Login here"
              fontWeight="bold"
            />
          </View>
          <View>
            <Text label="Try on everything on Smart Fashion" color="white" />
            <Text label="Be fashionable with our Stylish feature" />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
