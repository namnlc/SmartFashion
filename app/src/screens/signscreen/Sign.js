import React, {useState} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/ScrollableView/Scrollable';
import {Input, Icon, Button, SocialIcon} from 'react-native-elements';
import {styles} from './Style';
import Divider from 'react-native-divider';
import logo from '../../../res/images/logo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentSign}>
        <Text style={[styles.txt, styles.txtSmall]}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
        <FormSignIn />
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
            <SocialIcon type="facebook" iconSize={20} style={styles.sizeIcon} />
            <SocialIcon type="twitter" iconSize={20} style={styles.sizeIcon} />
            <SocialIcon
              type="apple"
              iconSize={20}
              style={[styles.sizeIcon, styles.apple]}
            />
            <SocialIcon type="google" iconSize={20} style={styles.sizeIcon} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const SignUpView = () => {
  const [active, setActive] = useState(false);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentSign}>
        <Text style={[styles.txt, styles.txtSmall, styles.txHeader]}>
          Sign In or Sign Up to unlock and explore more features
        </Text>
        <Text style={[styles.txt, styles.txParam]}>
          Freely upload photos of yourself and your clothes
          {'\n'}
          Unlimitedly try on millions of items
          {'\n'}
          Unlimitedly try on millions of items
        </Text>
        <Text />
        <Text />
        <FormSignUp />
        <Button
          title="Sign Up"
          buttonStyle={styles.btnSignIn}
          titleStyle={styles.txt}
        />
        <View>
          <Divider orientation="center">
            <Text style={styles.txt}>Or</Text>
          </Divider>
          <View style={[styles.viewIcon, styles.viewIconSignUp]}>
            <SocialIcon type="facebook" iconSize={20} style={styles.sizeIcon} />
            <SocialIcon type="twitter" iconSize={20} style={styles.sizeIcon} />
            <SocialIcon
              type="apple"
              iconSize={20}
              style={[styles.sizeIcon, styles.apple]}
            />
            <SocialIcon type="google" iconSize={20} style={styles.sizeIcon} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const FormSignUp = () => {
  return (
    <View>
      <Input placeholder="Name*" inputStyle={[styles.txt, styles.txtSmall]} />
      <Input placeholder="Gender" inputStyle={[styles.txt, styles.txtSmall]} />
      <Input
        placeholder="Date of birth"
        placeholderTextColor="#616161"
        disabled={true}
        rightIcon={
          <Icon
            name="arrow-down"
            type="simple-line-icon"
            size={13}
            style={styles.pickDate}
            onPress={() => console.log('hi')}
          />
        }
        inputStyle={[styles.txt, styles.txtSmall]}
      />
      <Input placeholder="Email*" inputStyle={[styles.txt, styles.txtSmall]} />
      <Input
        placeholder="Password*"
        inputStyle={[styles.txt, styles.txtSmall]}
        rightIcon={<Icon name="eye" type="foundation" color="#616161" />}
      />
    </View>
  );
};

const FormSignIn = () => {
  return (
    <View>
      <Input placeholder="Email*" inputStyle={[styles.txt, styles.txtSmall]} />
      <Input
        placeholder="Password*"
        inputStyle={[styles.txt, styles.txtSmall]}
        rightIcon={<Icon name="eye" type="foundation" color="#616161" />}
      />
      <TouchableOpacity>
        <Text style={[styles.txt, styles.txtForgot]}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Sign;
