/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import SignUp from './app/src/screens/signUp';
import tipScreen from './app/src/screens/tipScreen'
AppRegistry.registerComponent(appName, () => SignUp);
