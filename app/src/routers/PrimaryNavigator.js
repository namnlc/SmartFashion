import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import StylishScreen from '../screens/stylishscreen/StylishScreen';
import HomeNavigator from './HomeNavigator';
//import DefaultModel from '../screens/defaultmodelscreen/DefaultModelScreen';
import ProfileNavigator from './ProfileNavigator';
import TryonScreen from '../screens/tryonscreen/TryonScreen';
import EventScreen from '../screens/eventscreen/EventScreen';
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
        name="homeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, focused ? styles.color1 : styles.color2]}>
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
            <Text style={[styles.txt, focused ? styles.color1 : styles.color2]}>
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
        component={TryonScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, focused ? styles.color1 : styles.color2]}>
              TRY ON
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => <Icon type="" />,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, focused ? styles.color1 : styles.color2]}>
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
        name="profileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, focused ? styles.color1 : styles.color2]}>
              PROFILES
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
    fontFamily: 'optima',
    fontSize: 12,
    top: 5,
  },
  iconTab: {
    resizeMode: 'contain',
    width: 47,
    height: 47,
    marginBottom: 18,
  },
  color1: {
    color: 'black',
  },
  color2: {
    color: '#CACACA',
  },
});
export default MyTabs;
