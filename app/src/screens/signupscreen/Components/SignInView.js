import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Button,
  StyleSheet,
} from 'react-native';
import touchId from '../../../../res/images/touchid.png';
import Divider from 'react-native-divider';
import facebook from '../../../../res/images/facebook.png';
import printer from '../../../../res/images/printer.png';
import instagram from '../../../../res/images/instagram.png';
import twitter from '../../../../res/images/twitter.png';
import google from '../../../../res/images/google.png';
import * as React from 'react';
import {useEffect} from 'react';
import {signUp, styles, signIn} from './Style';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useStores} from '../../../stores/Store';
import {Icon} from 'react-native-elements';

const RenderSignIn = () => {
  const onSubmit = data => {
    Alert.alert('FormData', JSON.stringify(data));
  };

  const {register, handleSubmit, setValue, errors} = useForm();

  useEffect(() => {
    register({name: 'Email'}, {required: true});
    register({name: 'Password'}, {required: true});
  }, [register]);

  const {signStore} = useStores();
  console.log(signStore.Email);
  React.useEffect(() => {
    signStore.onSubmit();
    console.log(signStore.Email);
  }, [signStore]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>
        <Text style={signIn.txt}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#696969"
            onChangeText={text => setValue('Email', text, true)}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address',
              },
            })}
            style={signUp.txtInput}
          />
          {console.log(errors.Email)}
          {errors.Email && (
            <Text style={styles.errorNull}>Please enter your email</Text>
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#696969"
            onChangeText={text => setValue('Password', text, true)}
            style={signUp.txtInput}
          />
          {errors.Password && (
            <Text style={styles.errorNull}>Please enter your password</Text>
          )}
          <TouchableOpacity style={styles.touchForgot}>
            <Text style={styles.txtForgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUp.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={signUp.txtButton}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signIn.touchID}>
            <Image source={touchId} />
            <Text style={signIn.txtTouchId}>Touch ID</Text>
          </TouchableOpacity>
          <View style={signUp.divider}>
            <Divider orientation="center" color="#696969">
              Or
            </Divider>
          </View>
          <View style={signUp.icon}>
            <Icon
              type="font-awesome"
              name="facebook"
              color="#396AD6"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="google"
              color="#FC5253"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="twitter"
              color="#02B3F8"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="apple"
              color="black"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RenderSignIn;
