import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen/HomeScreen';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';
import DefaultModel from '../screens/defaultmodelscreen/DefaultModelScreen';
import React from 'react';
import {Image, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import StylishScreen from '../screens/stylishscreen/StylishScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#CACACA',
        //keyboardHidesTabBar: true,
        style: {
          height: '10%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        tabStyle: {marginVertical: 5, paddingTop: 5},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
              HOME
            </Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <Icon name="home" type="feather" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={StylishScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
              STYLISH
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="simple-line-icon"
              name="magic-wand"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Try On"
        component={DefaultModel}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
              TRY ON
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => <Icon type="" />,
        }}
      />
      <Tab.Screen
        name="Events"
        component={DefaultModel}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
              EVENTS
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="simple-line-icon"
              name="trophy"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={DefaultModel}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
              EVENTS
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon type="simple-line-icon" name="user" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Optima',
    fontSize: 12,
    top: 5,
  },
  iconTab: {
    resizeMode: 'contain',
    width: 47,
    height: 47,
    marginBottom: 18,
  },
});
export default MyTabs;
