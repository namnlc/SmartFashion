import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {AsyncStorage, View, Text} from 'react-native';
import SignUp from '../screens/signupscreen/SignUp';

const authStack = React.createContext();
const stack = createStackNavigator();
function Spash() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
function SignUpNavigator() {
  const myOptions = {
    headerShown: false,
  };
  return (
    <stack.Navigator>
      <stack.Screen name="signUp" component={SignUp} options={myOptions} />
    </stack.Navigator>
  );
}

export default SignUpNavigator;
