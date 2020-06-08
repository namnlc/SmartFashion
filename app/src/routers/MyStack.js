import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import DefModel from '../screens/DefModel';

const Stack = createStackNavigator();

function MyStack() {
    const myOptions = {
        headerShown: false,
    };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcomeScreen">
                <Stack.Screen
                    name="welcomeScreen"
                    component={WelcomeScreen}
                    options={myOptions}
                />
                <Stack.Screen
                    name="defaultModel"
                    component={DefModel}
                    options={myOptions}
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
