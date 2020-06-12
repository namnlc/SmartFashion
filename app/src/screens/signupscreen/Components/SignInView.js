import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import touchId from '../../../../res/images/touchid.png';
import Divider from 'react-native-divider';
import facebook from '../../../../res/images/facebook.png';
import printer from '../../../../res/images/printer.png';
import instagram from '../../../../res/images/instagram.png';
import twitter from '../../../../res/images/twitter.png';
import google from '../../../../res/images/google.png';
import * as React from 'react';
import {signUp, styles, signIn} from './Style';

const RenderSignIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={signIn.txt}>
        Sign In or Sign Up to unlock and explore more features with Smart
        Fashion!
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        value={username}
        onChangeText={setUsername}
        style={signUp.txtInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        value={password}
        onChangeText={setPassword}
        style={signUp.txtInput}
      />
      <TouchableOpacity style={styles.touchForgot}>
        <Text style={styles.txtForgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={signUp.button}>
        <Text style={signUp.txtButton}>Get a code</Text>
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
        <Image source={facebook} style={signUp.img} />
        <Image source={printer} style={signUp.img} />
        <Image source={instagram} style={signUp.img} />
        <Image source={twitter} style={signUp.img} />
        <Image source={google} style={signUp.img} />
      </View>
    </View>
  );
};

export default RenderSignIn;
