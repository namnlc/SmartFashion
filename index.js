/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import HeaderHome from './app/src/screens/homescreen/components/Header';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => HeaderHome);
