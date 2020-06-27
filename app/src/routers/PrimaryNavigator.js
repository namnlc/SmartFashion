import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import StylishScreen from '../screens/stylishscreen/StylishScreen';
import HomeNavigator from './HomeNavigator';
import DefaultModel from '../screens/defaultmodelscreen/DefaultModelScreen';
import ProfileNavigator from './ProfileNavigator';
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
        name="profileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={[styles.txt, {color: focused ? 'black' : '#CACACA'}]}>
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
