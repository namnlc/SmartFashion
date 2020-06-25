import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homescreen/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
const home = createStackNavigator();
const drawerHome = createDrawerNavigator();
const HomeNavigator = () => {
  const myOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <drawerHome.Navigator
      initialRouteName="home"
      drawerContent={({props}) => <DrawerHomeScreen {...props} />}>
      <drawerHome.Screen
        name="home"
        component={HomeScreen}
        options={myOptions}
      />
    </drawerHome.Navigator>
  );
};

export default HomeNavigator;
