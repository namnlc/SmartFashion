import React from 'react';
import {Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';
import Flags from './components/flags/Flags';
import LogoWhite from '../../../res/images/logoWhite.png';
import Background from '../../../res/images/background.png';
import {Button} from 'react-native-elements';
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
          <View style={styles.footer}>
            <Button
              title="women"
              buttonStyle={styles.btn}
              titleStyle={styles.txt2}
            />
            <Button
              title="men"
              buttonStyle={styles.btn}
              titleStyle={styles.txt2}
              onPress={() => navigation.navigate('primaryNavigator')}
            />
          </View>
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
