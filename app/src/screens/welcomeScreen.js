import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import america from '../../res//images/welcome/flags/america.png';
import ToggleFlags from "../components/toggleFlags";

import welcome from "../../res/images/welcome/welcome.png"

const welcomeSreen = ({navigation}) =>{
  // static navigationOptions={
  //   header:null
  // }
      const {wel, btn, container, body, txt, img, txt2} = styles;

      //const navigationOptions
      return (
      <SafeAreaView style={{flex:1}}>
      <View style={container}>
        <ToggleFlags/>
        <View style={body}>
          <View style={img}>
            <Image source={welcome} />
            <Text style={txt}>Smarten up your Style!</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.4} style={btn}
            onPress={()=>navigation.navigate("defaultmodel")}
            >
              <Text style={{ color: '#fff', fontSize: 16}}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
            
          <View>
            <Text style={txt2}>Try on everything on Smart Fashion</Text>
            <Text style={txt2}>Be fashionable with our Stylish feature</Text>
          </View>
        </View>
      </View>
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'#000'
  },
  body:{
    position:'relative',
    //backgroundColor:"#000"
  },
  btn: {
    backgroundColor: '#098FA8',
    borderRadius:25,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems:'center',
    height:50,
    width:184
  },
  txt: {
    //fontFamily:'poppins',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  img: {
    marginTop: 0,
  },
  
  txt2: {
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default welcomeSreen;
