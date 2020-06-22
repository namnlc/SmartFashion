import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {AsyncStorage, View, Text} from 'react-native';
import SignUp from '../screens/signupscreen/SignUp';
import ForgotPassword from '../screens/forgotpasswordscreen/ForgotPasswordScreen';
const stack = createStackNavigator();
function AuthNavigator() {
  const myOptions = {
    headerShown: false,
  };
  return (
    <stack.Navigator>
      <stack.Screen name="signUp" component={SignUp} options={myOptions} />
      <stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={myOptions}
      />
    </stack.Navigator>
  );
}

export default AuthNavigator;
