import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profilescreen/ProfileScreen';
const profile = createDrawerNavigator();

const ProfileNavigator = () => {
  const myOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
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

export default ProfileNavigator;
