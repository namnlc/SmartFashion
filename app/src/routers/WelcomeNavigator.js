import * as React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcomescreen/WelcomeScreen';

const Stack = createStackNavigator();
function WelcomeNavigator() {
  const myOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="welcomeScreen">
      <Stack.Screen
        name="welcomeScreen"
        component={WelcomeScreen}
        options={myOptions}
      />
    </Stack.Navigator>
  );
}

export default WelcomeNavigator;
