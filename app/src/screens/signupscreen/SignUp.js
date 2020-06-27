import logo from '../../../res/images/logo.png';
import Animated from 'react-native-reanimated';
import * as React from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import RenderSignIn from './Components/SignInView';
import RenderSignUp from './Components/SignUpView';
import {styles} from './Components/Style';
import {Icon, Layout} from 'react-native-elements';

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
      <SafeAreaView style={styles.tabContainer}>
        <Image source={logo} style={styles.logo2} />
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
                key={i}
                style={[styles.tabBar, {backgroundColor}]}
                onPress={() => this.setState({index: i})}>
                <Animated.Text style={[styles.txtTab, {color}]}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Icon
          type="font-awesome"
          name="times"
          color="white"
          size={26}
          style={{marginRight: 15}}
          onPress={() => this.props.navigation.pop()}
        />
      </SafeAreaView>
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

export default SignUp;
