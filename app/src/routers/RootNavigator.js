import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import SignUpNavigator from './SignUpNavigator';
import React from 'react';

const stack = createStackNavigator();

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
          component={SignUpNavigator}
          options={myOptions}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
