import React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homescreen/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
import StylishScreen from '../screens/stylishscreen/StylishScreen';
import profileRoot from './ProfileNavigator';
import ProfileScreen from '../screens/profilescreen/ProfileScreen';

const drawerHome = createDrawerNavigator();

const root = createStackNavigator();
const homeRoot = () => {
  return (
    <root.Navigator initialRouteName="home">
      <root.Screen name="home" component={HomeScreen} options={myOptions} />
    </root.Navigator>
  );
};
const myOptions = {
  headerShown: false,
  //gestureEnabled: false,
};
const HomeNavigator = () => {
  return (
    <drawerHome.Navigator initialRouteName="home">
      <drawerHome.Screen name="home" component={homeRoot} options={myOptions} />
    </drawerHome.Navigator>
  );
};

export default HomeNavigator;
