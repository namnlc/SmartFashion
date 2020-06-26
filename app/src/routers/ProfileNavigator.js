import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profilescreen/ProfileScreen';
import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
import DrawerProfileView from '../screens/profilescreen/components/DrawerProfileView';
import {createStackNavigator} from '@react-navigation/stack';
const profile = createDrawerNavigator();
const root = createStackNavigator();

const profileRoot = () => {
  return (
    <root.Navigator initialRouteName="profiles">
      <root.Screen
        name="profiles"
        component={ProfileNavigator}
        options={myOptions}
      />
    </root.Navigator>
  );
};
const myOptions = {
  headerShown: false,
  //gestureEnabled: false,
};
const ProfileNavigator = () => {
  return (
    <profile.Navigator>
      <profile.Screen
        name="profile"
        component={ProfileScreen}
        options={myOptions}
      />
    </profile.Navigator>
  );
};

export default profileRoot;
