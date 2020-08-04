import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, View} from 'react-native';
const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState('true');
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    //setLoading(loading);
    if (initializing) {
      //setLoading(true);
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //setLoading(!loading);
    console.log('hi', subscriber);
    return subscriber; // unsubscribe on unmount
  });

  const myOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  if (!user) {
    return (
      <NavigationContainer>
        <Navigator initialRouteName="welcomeNavigator">
          <Screen
            name="welcomeNavigator"
            component={WelcomeNavigator}
            options={myOptions}
          />
          <Screen
            name="authNavigator"
            component={AuthNavigator}
            options={myOptions}
          />
          <Screen
            name="primaryNavigator"
            component={PrimaryNavigator}
            options={myOptions}
          />
        </Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Navigator initialRouteName="primaryNavigator">
        <Screen
          name="primaryNavigator"
          component={PrimaryNavigator}
          options={myOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
