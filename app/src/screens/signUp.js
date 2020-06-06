import top from '../../res/images/Signin/top.png';
import logo from '../../res/images/Signin/logo.png';
import Icon from 'react-native-vector-icons';
import tab from '../components/toggleModel';
import printer from '../../res/images/Signin/printer.png';
import facebook from '../../res/images/Signin/facebook.png';
import twitter from '../../res/images/Signin/twitter.png';
import instagram from '../../res/images/Signin/instagram.png';
import google from '../../res/images/Signin/google.png';
import touchid from '../../res/images/Signin/touchid.png';
import Divider from 'react-native-divider';
import Animated from 'react-native-reanimated';
import * as React from 'react';
import Modal from 'react-native-modal';
import {useState} from 'react';


import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Component} from 'react';
const initialLayout = {width: Dimensions.get('window').width};


 const GenModal = () => {
  const gender = [
    {
      title: 'Female',
      id: 1,
    },
    {
      title: 'Male',
      id: 2,
    },
    {
      title: 'Others',
      id: 3,
    },
  ];
  return (
    <View style={{flex: 1}}>
      {gender.map(e => {
        return (
          <View
            style={{backgroundColor: 'red',top:25,width:314,height:65,left:-10}}>
              <TouchableOpacity key={e.id} style={{padding:10,width:300}} activeOpacity={0.}>
              <Text key={e.id}>{e.title}</Text>
              </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const BirthModal = () => {
  var day = [] ; 
  for ( var i = 1 ; i <=  100;i++)
  {
    day.push(<Text key ={i}>{i}</Text>)
  }
  return ( 
    <View
      style={{backgroundColor: 'red',left:-10,top:22,zIndex:1}}>
      {
       day.forEach(e => {
          console.log({e})
       })
      }
    </View>
   )
}
const RenderSignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isChange, setIsChange] = useState ('Gender')
  return (
    <View style={styles.container}>
      <Text style={signup.txt}>Sign In or Sign Up to upload your model!</Text>
      <TouchableOpacity
        style={[signup.textGender,signup.txtInput, isShow == true ? {borderColor:'#00AEBB',borderWidth:1}: null]}
          onPress={()=>setIsShow(!isShow)}
          activeOpacity={0.5}
      >
         <Text style={signup.txtDrop} >Gender</Text> 
        {isShow==true ? (<GenModal />) : null}         
      </TouchableOpacity>
      <View style={{flexDirection:'row',width:"82%", marginHorizontal:10,zIndex:-1}}>
      <TouchableOpacity 
      style={[signup.txtInput,signup.textGender, {padding:12.5, zIndex:-1,width:110,marginRight:10}]}
      onPress={()=>setIsBirth(!isBirth)}
      >
        <Text style={signup.txtDrop}>Month</Text>
        {isBirth == true ? (<View style={{height:100}}><BirthModal/></View>) : null}
      </TouchableOpacity>
      <TouchableOpacity 
      style={[signup.txtInput,signup.textGender,  {padding:12.5, zIndex:-1,width:82,marginRight:12}]}
      
      >
        
        <Text style={signup.txtDrop}>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[signup.txtInput, signup.textGender, {padding:12.5, zIndex:-1, width:91}]}
      
      >
        <Text style={signup.txtDrop}>Year</Text>
      </TouchableOpacity>
      </View>
      
      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={[signup.txtInput,{zIndex:-2}]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        style={[signup.txtInput,{zIndex:-2}]}
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
};

const RenderSignIn = () => {
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
      <TouchableOpacity style={{width: '80%', flexDirection: 'row-reverse'}}>
        <Text style={{color: '#098FA8', fontSize: 12}}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={signup.button}>
        <Text style={signup.txtButton}>Get a code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={signin.touchID}>
        <Image source={touchid} />
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
};
class SignUp extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Sign In'},
      {key: 'second', title: 'Sign Up'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const index = props.nowindex;
    return (
      <View style={styles.tabContainer}>
        <View>
          <Image source={logo} style={{top: 8, left: -10}} />
        </View>
        <View style={styles.tabView}>
          {props.navigationState.routes.map((route, i) => {
            let color = '#80BFCB';
            if (this.state.index == i) {
              color = '#098FA8';
            }
            let backgroundColor = 'transparent';
            if (this.state.index == i) {
              backgroundColor = '#fff';
            }
            return (
              <TouchableOpacity
                style={[styles.tabBar, {backgroundColor}]}
                onPress={() => this.setState({index: i})}>
                <Animated.Text style={[styles.txtTab, {color}]}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <Image source={logo} style={{top: 8, right: -10}} />
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    first: RenderSignIn,
    second: RenderSignUp,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const signup = StyleSheet.create({
  textGender:{
    justifyContent: 'center',
    padding:12.5,
    //color:"#696969"
  },
  txtDrop:{
    color:"#696969"
  },
  txt: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft: -25,
  },
  txtInput: {
    width: '82%',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#E3EAEC',
    paddingLeft: 10,
    paddingHorizontal:20,
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
    paddingBottom: 30,
    //letterSpacing:0.1
  },
  txtTouchId: {
    color: '#098FA8',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  touchID: {
    flexDirection: 'row',
    backgroundColor: '#E2F7FD',
    width: '75%',
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

  // render custom tabbar
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    backgroundColor: '#098FA8',
    borderBottomLeftRadius: 28,
    zIndex:-1
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06839A',
    borderRadius: 10,
    marginTop: 20,
    width: '65%',
    height: 50,
  },
  tabBar: {
    //flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '43%',
    padding: 10,
    //marginRight:-20,
    borderRadius: 10,
  },

  txtTab: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignUp