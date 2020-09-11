import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Sign from '../screens/signscreen/Sign';
import ForgotPassword from '../screens/forgotpasswordscreen/ForgotPasswordScreen';
//import LoadingScreen from '../screens/loadingscreen/LoadingScreen';
const stack = createStackNavigator();
function AuthNavigator() {
  const myOptions = {
    headerShown: false,
  };
  return (
    <stack.Navigator initialRouteName="sign">
      <stack.Screen name="sign" component={Sign} options={myOptions} />
      <stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={myOptions}
      />
    </stack.Navigator>
  );
}

export default AuthNavigator;
