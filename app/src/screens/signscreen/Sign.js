import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/ScrollableView/Scrollable';
import {Input, Icon, Button, SocialIcon} from 'react-native-elements';
import {styles} from './Style';
import Divider from 'react-native-divider';
import logo from '../../../res/images/logo.png';
import {useNavigation} from '@react-navigation/native';
const Sign = () => {
  //const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={logo} style={styles.logo} />
        <Icon name="x" type="feather" style={styles.x} />
      </View>
      <ScrollableTabView
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="#616161"
        renderTabBar={() => (
          <ScrollableView
            tabBarTextStyle={[styles.txtSign, styles.txt]}
            style={styles.content}
            activeTabs={{borderBottomWidth: 2, alignSelf: 'center'}}
          />
        )}>
        <SignInView tabLabel="SIGN IN" />
        <SignUpView tabLabel="SIGN UP" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const SignInView = () => {
  return (
    <View style={styles.contentSign}>
      <Text style={[styles.txt, styles.txtSmall]}>
        Sign In or Sign Up to unlock and explore more features with Smart
        Fashion!
      </Text>
      <View>
        <Input
          placeholder="Email*"
          inputStyle={[styles.txt, styles.txtSmall]}
        />
        <Input
          placeholder="Password*"
          inputStyle={[styles.txt, styles.txtSmall]}
          rightIcon={<Icon name="eye" type="foundation" color="#616161" />}
        />
        <TouchableOpacity>
          <Text style={[styles.txt, styles.txtForgot]}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          title="Sign In"
          buttonStyle={styles.btnSignIn}
          titleStyle={styles.txt}
        />
        <Button
          type="outline"
          title="Face Id"
          buttonStyle={styles.btnSignUp}
          titleStyle={[styles.txt, styles.colorSign]}
        />
      </View>

      <View>
        <Divider orientation="center">
          <Text style={styles.txt}>Or</Text>
        </Divider>
        <View style={styles.viewIcon}>
          <SocialIcon type="facebook" />
          <SocialIcon type="twitter" />
          <SocialIcon type="apple" style={styles.apple} />
          <SocialIcon type="google" />
        </View>
      </View>
    </View>
  );
};

const SignUpView = () => {
  return (
    <View>
      <Text>Sign In or Sign Up to unlock and explore more features</Text>
    </View>
  );
};
export default Sign;
