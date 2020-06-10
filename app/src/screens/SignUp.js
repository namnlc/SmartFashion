import logo from '../../res/images/logo.png';
import printer from '../../res/images/printer.png';
import facebook from '../../res/images/facebook.png';
import twitter from '../../res/images/twitter.png';
import instagram from '../../res/images/instagram.png';
import google from '../../res/images/google.png';
import touchId from '../../res/images/touchid.png';
import Divider from 'react-native-divider';
import Animated from 'react-native-reanimated';
import * as React from 'react';
import {useState} from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

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
          <View style={styles.gender}>
            <TouchableOpacity
              key={e.id}
              style={styles.touchGender}
              activeOpacity={0}>
              <Text key={e.id}>{e.title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const BirthModal = () => {
  let day = [];
  for (let i = 1; i <= 100; i++) {
    day.push(<Text key={i}>{i}</Text>);
  }
  return (
    <View style={styles.birth}>
      {day.forEach(e => {
        console.log({e});
      })}
    </View>
  );
};
const RenderSignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  //const [isChange, setIsChange] = useState('Gender');
  return (
    <View style={styles.container}>
      <Text style={signUp.txt}>Sign In or Sign Up to upload your model!</Text>
      <TouchableOpacity
        style={[
          signUp.textGender,
          signUp.txtInput,
          isShow === true ? styles.showGender : null,
        ]}
        onPress={() => setIsShow(!isShow)}
        activeOpacity={0.5}>
        <Text style={signUp.txtDrop}>Gender</Text>
        {isShow === true ? <GenModal /> : null}
      </TouchableOpacity>
      <View style={styles.touchBirth}>
        <TouchableOpacity
          style={[signUp.txtInput, signUp.textGender, styles.touchMonth]}
          onPress={() => setIsBirth(!isBirth)}>
          <Text style={signUp.txtDrop}>Month</Text>
          {isBirth === true ? (
            <View style={{height: 100}}>
              <BirthModal />
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={[signUp.txtInput, signUp.textGender, styles.touchDay]}>
          <Text style={signUp.txtDrop}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[signUp.txtInput, signUp.textGender, styles.touchYear]}>
          <Text style={signUp.txtDrop}>Year</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={[signUp.txtInput, {zIndex: -2}]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        style={[signUp.txtInput, {zIndex: -2}]}
      />
      <TouchableOpacity style={signUp.button}>
        <Text style={signUp.txtButton}>Get a code</Text>
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

const RenderSignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={signIn.txt}>
        Sign In or Sign Up to unlock and explore more features with Smart
        Fashion!
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={signUp.txtInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
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
    return (
      <View style={styles.tabContainer}>
        <View>
          <Image source={logo} style={styles.logo2} />
        </View>
        <View style={styles.tabView}>
          {props.navigationState.routes.map((route, i) => {
            let color = '#80BFCB';
            if (this.state.index === i) {
              color = '#098FA8';
            }
            let backgroundColor = 'transparent';
            if (this.state.index === i) {
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

const signUp = StyleSheet.create({
  textGender: {
    justifyContent: 'center',
    padding: 12.5,
    //color:"#696969"
  },
  txtDrop: {
    color: '#696969',
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
    paddingHorizontal: 20,
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
const signIn = StyleSheet.create({
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
  gender: {
    backgroundColor: 'red',
    top: 25,
    width: 314,
    height: 65,
    left: -10,
  },
  touchGender: {
    padding: 10,
    width: 300,
  },
  showGender: {
    borderColor: '#00AEBB',
    borderWidth: 1,
  },
  birth: {
    backgroundColor: 'red',
    left: -10,
    top: 22,
    zIndex: 1,
  },
  touchBirth: {
    flexDirection: 'row',
    width: '82%',
    marginHorizontal: 10,
    zIndex: -1,
  },
  touchMonth: {
    padding: 12.5,
    zIndex: -1,
    width: 110,
    marginRight: 10,
  },
  touchDay: {
    padding: 12.5,
    zIndex: -1,
    width: 82,
    marginRight: 12,
  },
  touchYear: {
    padding: 12.5,
    zIndex: -1,
    width: 91,
  },
  touchForgot: {
    width: '80%',
    flexDirection: 'row-reverse',
  },
  // render custom tabbar
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    backgroundColor: '#098FA8',
    borderBottomLeftRadius: 28,
    zIndex: -1,
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
  txtForgot: {
    color: '#098FA8',
    fontSize: 12,
  },
  txtTab: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo2: {
    top: 8,
    left: -10,
  },
});

export default SignUp;
