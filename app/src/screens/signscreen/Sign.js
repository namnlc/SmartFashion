/**
 * TODO:
 * - fix sign
 * fix header
 * sign up view for android
 */
import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image, Dimensions} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/scrollableview/Scrollable';
import {Input, Icon, Button, SocialIcon} from 'react-native-elements';
import {styles} from './Style';
import Divider from 'react-native-divider';
import logo from '../../../res/images/logo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import {
  emailErrorsMessage,
  checkFormatEmail,
  passwordErrorsMessage,
} from '../../../utils/validation';
import {
  PickBottomDate,
  PickBottomGender,
} from '../../components/picker/PickBottom';
import {useNavigation} from '@react-navigation/native';
const {height} = Dimensions.get('window');
const Sign = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={logo} style={styles.logo} />
        <Icon
          name="x"
          type="feather"
          style={styles.x}
          onPress={() => navigation.pop()}
        />
      </View>
      <ScrollableTabView
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="#616161"
        locked={true}
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txt}
            tabStyle={styles.tabSign}
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
  //const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableAutomaticScroll={true}
      enableOnAndroid={true}>
      <View style={styles.contentSign}>
        <Text style={[styles.txt, styles.txtSmall]}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
        <FormSignIn />
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
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableAutomaticScroll={true}
      enableOnAndroid={true}>
      <View style={styles.contentSign}>
        <Text style={[styles.txt, styles.txtSmall, styles.txHeader]}>
          Sign In or Sign Up to unlock and explore more features
        </Text>
        <Text style={[styles.txt, styles.txParam]}>
          Freely upload photos of yourself and your clothes
          {'\n'}
          Unlimited try on millions of items
          {'\n'}
          Easily manage your data
        </Text>
        <FormSignUp />
        <View>
          <Button
            title="Sign Up"
            style={styles.btnSign}
            buttonStyle={styles.btnSignUp}
            titleStyle={[styles.txtSign, styles.colorSign]}
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

const FormSignUp = () => {
  const [secure, setSecure] = useState(true);
  return (
    <View>
      <Input
        placeholder="Name*"
        inputStyle={[styles.txt, styles.txtSmall]}
        placeholderTextColor="#3D3D3D"
      />
      <PickBottomGender />
      <PickBottomDate />
      <Input
        placeholder="Email*"
        inputStyle={[styles.txt, styles.txtSmall]}
        placeholderTextColor="#3D3D3D"
      />
      <Input
        secureTextEntry={secure}
        placeholder="Password*"
        placeholderTextColor="#3D3D3D"
        inputStyle={[styles.txt, styles.txtSmall]}
        rightIcon={
          <Icon
            name="eye"
            type="foundation"
            color="#3D3D3D"
            onPress={() => setSecure(!secure)}
          />
        }
      />
    </View>
  );
};

const FormSignIn = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const {handleSubmit, setError, errors} = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    emailErrorsMessage.forEach(({name, type, message}) =>
      setError(name, {type, message}),
    );
    passwordErrorsMessage.forEach(({name, type, message}) =>
      setError(name, {type, message}),
    );
  };
  return (
    <View>
      <View>
        <Input
          placeholderTextColor="#3D3D3D"
          placeholder="Email*"
          inputStyle={[styles.txt, styles.txtSmall]}
          name="email"
          onChange={() => {
            emailErrorsMessage.forEach(({name, type, message}) =>
              setError(name, {type, message}),
            );
          }}
          onBlur={() =>
            emailErrorsMessage.forEach(({name, type, message}) =>
              setError(name, {type, message}),
            )
          }
          errorMessage={
            email.length === 0 && errors.NOEMAIL
              ? errors.NOEMAIL.message
              : !checkFormatEmail(email) && errors.INVALIDEMAIL
              ? errors.INVALIDEMAIL.message
              : ''
          }
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholderTextColor="#3D3D3D"
          secureTextEntry={secure}
          placeholder="Password*"
          name="password"
          inputStyle={[styles.txt, styles.txtSmall]}
          onChange={() => {
            passwordErrorsMessage.forEach(({name, type, message}) =>
              setError(name, {type, message}),
            );
          }}
          rightIcon={
            <Icon
              name="eye"
              type="foundation"
              color="#616161"
              onPress={() => setSecure(!secure)}
            />
          }
          onBlur={() =>
            passwordErrorsMessage.forEach(({name, type, message}) =>
              setError(name, {type, message}),
            )
          }
          errorMessage={
            password.length === 0 && errors.NOPASSWORD
              ? errors.NOPASSWORD.message
              : password.length < 8 && errors.MINPASSWORD
              ? errors.MINPASSWORD.message
              : ''
          }
          onChangeText={value => setPassword(value)}
        />
        <Text
          style={[styles.txt, styles.txtForgot]}
          onPress={() => navigation.navigate('forgotPassword')}>
          Forgot password?
        </Text>
      </View>
      <View>
        <Button
          title="Sign In"
          buttonStyle={styles.btnSignIn}
          titleStyle={styles.txtSign}
          onPress={handleSubmit(onSubmit)}
        />
        <Button
          title="Face Id"
          style={styles.btnSign}
          buttonStyle={styles.btnSignUp}
          titleStyle={[styles.txtSign, styles.colorSign]}
        />
      </View>
    </View>
  );
};

export default Sign;
