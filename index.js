/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import HeaderHome from './app/src/screens/homescreen/components/Header';
import MyTabs from './app/src/routers/PrimaryNavigator';
import Stylish from './app/src/screens/stylishscreen/StylishScreen';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
