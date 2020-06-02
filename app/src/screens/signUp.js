// import React, {Component, useState} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   TextInput,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
 import top from '../../res/images/Signin/top.png';
 import logo from '../../res/images/Signin/logo.png';
 import Icon from 'react-native-vector-icons';
import tab from '../components/toggleModel';
 import printer from '../../res/images/Signin/printer.png';
 import facebook from '../../res/images/Signin/facebook.png';
 import twitter from '../../res/images/Signin/twitter.png';
 import instagram from '../../res/images/Signin/instagram.png';
 import google from '../../res/images/Signin/google.png';
 import touchid from '../../res/images/Signin/touchid.png'
 import Divider from 'react-native-divider';
 //import { TabView, SceneMap } from 'react-native-tab-view'
 //const {width} = Dimensions.get('window').width;
 //const initialLayout = { width: Dimensions.get('window').width };

const RenderSignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={signup.txt}>Sign In or Sign Up to upload your model!</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TextInput
        placeholder="Gender"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TouchableOpacity style={signup.button}>
        <Text style={signup.txtButton}>Get a code</Text>
      </TouchableOpacity>

      <View style={signup.divider}>
        <Divider orientation="center" color="#696969">
          Or
        </Divider>
      </View>
      <View style={signup.icon}>
        <Image source={facebook} style={signup.img} />
        <Image source={printer} style={signup.img} />
        <Image source={instagram} style={signup.img} />
        <Image source={twitter} style={signup.img} />
        <Image source={google} style={signup.img} />
      </View>
    </View>
  );
}

const  RenderSignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={signin.txt}>
        Sign In or Sign Up to unlock and explore more features with Smart
        Fashion!
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        style={signup.txtInput}
      />
      <TouchableOpacity style={{width:'80%',
      flexDirection:'row-reverse',
      }}>
        <Text style={{color:'#098FA8', fontSize:12}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={signup.button}>
        <Text style={signup.txtButton}>Get a code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={signin.touchID}>
        <Image source={touchid}/>
        <Text style={signin.txtTouchId}>Touch ID</Text>
      </TouchableOpacity>
      <View style={signup.divider}>
        <Divider orientation="center" color="#696969">
          Or
        </Divider>
      </View>
      <View style={signup.icon}>
        <Image source={facebook} style={signup.img} />
        <Image source={printer} style={signup.img} />
        <Image source={instagram} style={signup.img} />
        <Image source={twitter} style={signup.img} />
        <Image source={google} style={signup.img} />
      </View>
    </View>
  );
}

// function SignUp() {
//   const [screen,setScreen] = React.useState(0);

//   const [routes] = React.useState([
//     { key: 'SignIn', title: 'name' },
//     { key: 'SignUp', title: 'age' },
//   ]);

//   const renderScene = SceneMap({
//     SignIn:RenderSignIn,
//     SignUp:RenderSignUp,
//   })

//   // const handleToggle = ()=>{
//   //   setScreen(prevState=>!prevState)
//   // }
//   return (
//       <TabView 
//        navigationState={{ screen, routes }}
//        renderScene={renderScene}
//        onIndexChange={setScreen}
//        //initialLayout={initialLayout}
//       />
//   );
// }


const signup = StyleSheet.create({
  txt: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft: -25,
  },
  txtInput: {
    width: '82%',
    height: 40,
    borderRadius: 6,
    backgroundColor: '#E3EAEC',
    padding: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#098FA8',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  txtButton: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  divider: {
    width: '75%',
    marginVertical: 10,
  },
  icon: {
    width: '80%',
    height: 33,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  img: {
    width: 33,
    height: 33,
    marginRight: 20,
  },
});
const signin = StyleSheet.create({
  txt: {
    width: '80%',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom:30,
    //letterSpacing:0.1
  },
  txtTouchId:{
    color:"#098FA8",
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    padding:10
  },
  touchID:{
    flexDirection:'row',
    backgroundColor:'#E2F7FD',
    width:'75%',
    marginTop:10,
    height:50,
    justifyContent: 'center',
    alignItems:'center'
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    alignSelf: 'center',
    marginLeft: 6,
    marginTop: -13,
    borderBottomLeftRadius: 10,
  },
  logo: {
    //backgroundColor:'red',
    position: 'absolute',
    top: 30,
    left: 20,
  },
});

// export default SignUp;

import * as React from 'react';
import {  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
 } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: RenderSignIn,
    second: RenderSignUp,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

