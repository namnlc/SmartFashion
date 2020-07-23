import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profilescreen/ProfileScreen';
//import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
import DrawerProfileView from '../screens/profilescreen/components/DrawerProfileView';
//import {createStackNavigator} from '@react-navigation/stack';

const profile = createDrawerNavigator();
const myOptions = {
  headerShown: false,
  //gestureEnabled: false,
};
const ProfileNavigator = () => {
  return (
    <profile.Navigator
      initialRouteName="profiles"
      drawerContent={(props) => <DrawerProfileView {...props} />}>
      <profile.Screen
        name="profiles"
        component={ProfileScreen}
        options={myOptions}
      />
    </profile.Navigator>
  );
};

export default ProfileNavigator;
