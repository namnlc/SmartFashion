/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/homescreen/HomeScreen';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import DefaultModel from '../screens/defaultmodelscreen/DefaultModelScreen';
import {NavigationContainer, BaseRouter} from '@react-navigation/native';
import React from 'react';
import {Image, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
const tabs = createBottomTabNavigator();
const STARWAND = require('../screens/homescreen/starwand.png');
const STARWANDACTIVE = require('../screens/homescreen/starwandactive.png');
const HOME = require('../screens/homescreen/home.png');
const HOMEACTIVE = require('../screens/homescreen/homeactive.png');
const TRYON = require('../screens/homescreen/tryon.png');
const TRYONACTIVE = require('../screens/homescreen/tryonactive.png');
const PROFILE = require('../screens/homescreen/profile.png');
const PROFILEACTIVE = require('../screens/homescreen/profile.png');

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {height: 60},
          tabStyle: {marginVertical: 5, paddingTop: 5},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  display: focused ? 'none' : null,
                  color: focused ? null : '#CACACA',
                  fontWeight: 'bold',
                  paddingTop: 10,
                }}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={focused ? HOMEACTIVE : HOME}
                style={
                  focused
                    ? {
                        resizeMode: 'contain',
                        width: 47,
                        height: 47,
                        marginBottom: 20,
                      }
                    : {width: 17, height: 20}
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={WelcomeScreen}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  display: focused ? 'none' : null,
                  color: focused ? null : '#CACACA',
                  fontWeight: 'bold',
                  paddingTop: 10,
                }}>
                Stylish
              </Text>
            ),
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={focused ? STARWANDACTIVE : STARWAND}
                style={
                  focused
                    ? {
                        //resizeMethod: 'scale',
                        resizeMode: 'contain',
                        width: 47,
                        height: 47,
                        marginBottom: 18,
                      }
                    : {width: 17, height: 20}
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Try On"
          component={DefaultModel}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  display: focused ? 'none' : null,
                  color: focused ? null : '#CACACA',
                  fontWeight: 'bold',
                  paddingTop: 10,
                }}>
                Try on
              </Text>
            ),
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={focused ? TRYONACTIVE : TRYON}
                style={
                  focused
                    ? {
                        //resizeMethod: 'scale',
                        resizeMode: 'contain',
                        width: 47,
                        height: 47,
                        marginBottom: 18,
                      }
                    : {width: 17, height: 27}
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={DefaultModel}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  display: focused ? 'none' : null,
                  color: focused ? null : '#CACACA',
                  fontWeight: 'bold',
                  paddingTop: 10,
                }}>
                Profiles
              </Text>
            ),
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={focused ? PROFILEACTIVE : PROFILE}
                style={
                  focused
                    ? {
                        //resizeMethod: 'scale',
                        resizeMode: 'contain',
                        width: 47,
                        height: 47,
                        marginBottom: 18,
                      }
                    : {width: 17, height: 20}
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
