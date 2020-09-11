import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';
import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import LoadingScreen from '../screens/loadingscreen/LoadingScreen';
import {AuthContext} from './AuthProvider';
const stack = createStackNavigator();

const RootNavigator = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (loading) {
    return <LoadingScreen />;
  }
  const myOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      {!user ? (
        <stack.Navigator initialRouteName="welcomeNavigator">
          <stack.Screen
            name="welcomeNavigator"
            component={WelcomeNavigator}
            options={myOptions}
          />
          <stack.Screen
            name="authNavigator"
            component={AuthNavigator}
            options={myOptions}
          />
          <stack.Screen
            name="primaryNavigator"
            component={PrimaryNavigator}
            options={myOptions}
          />
        </stack.Navigator>
      ) : (
        <stack.Navigator>
          <stack.Screen
            name="primaryNavigator"
            component={PrimaryNavigator}
            options={myOptions}
          />
        </stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
