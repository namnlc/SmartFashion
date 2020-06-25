import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';
import React from 'react';
import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/homescreen/HomeScreen';

const {Navigator, Screen} = createStackNavigator();
const drawer = createDrawerNavigator();
const RootNavigator = () => {
  const myOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      <Navigator initialRouteName="welcomeNavigator">
        <Screen
          name="welcomeNavigator"
          component={WelcomeNavigator}
          options={myOptions}
        />
        <Screen
          name="signUpNavigator"
          component={AuthNavigator}
          options={myOptions}
        />
        <Screen
          name="primaryNavigator"
          component={PrimaryNavigator}
          options={myOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
