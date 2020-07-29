import React from 'react';
//import {Button, View} from 'react-native';
//import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homescreen/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHomeScreen from '../screens/homescreen/components/DrawerHomeScreen';
import ProductDetail from '../screens/productdetailscreen/ProductDetail';
//import StylishScreen from '../screens/stylishscreen/StylishScreen';
//import profileRoot from './ProfileNavigator';
//import ProfileScreen from '../screens/profilescreen/ProfileScreen';

const drawerHome = createDrawerNavigator();

const myOptions = {
  headerShown: false,
  //gestureEnabled: false,
};
const HomeNavigator = () => {
  return (
    <drawerHome.Navigator
      initialRouteName="home"
      drawerContent={(props) => <DrawerHomeScreen {...props} />}>
      <drawerHome.Screen
        name="home"
        component={HomeScreen}
        options={myOptions}
      />
      <drawerHome.Screen
        name="productDetail"
        component={ProductDetail}
        options={myOptions}
      />
    </drawerHome.Navigator>
  );
};

export default HomeNavigator;
