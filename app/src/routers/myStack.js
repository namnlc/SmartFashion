import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import welcomeScreen from '../screens/welcomeScreen';
import defModel from '../screens/defModel';
//import signUp from '../screens/signUP';
const Stack = createStackNavigator();

function MyStack() {
  const myOptionsWelcome = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={welcomeScreen}
          options={myOptionsWelcome}
        />
        <Stack.Screen
          name="defaultmodel"
          component={defModel}
          options={myOptionsWelcome}
        />
        {/* <Stack.Screen
          name="signup"
          component={signUp}
          options={myOptionsWelcome}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
