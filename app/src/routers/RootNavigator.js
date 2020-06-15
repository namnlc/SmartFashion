import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';
import React, {useContext} from 'react';

const stack = createStackNavigator();
const useAuthContext = React.createContext();
const LOGIN_KEY = 'login';


const RootNavigator = () => {
  const myOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="welcomeNavigator">
        <stack.Screen
          name="welcomeNavigator"
          component={WelcomeNavigator}
          options={myOptions}
        />
        <stack.Screen
          name="signUpNavigator"
          component={AuthNavigator}
          options={myOptions}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
