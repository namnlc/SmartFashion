/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import Sign from './app/src/screens/signscreen/Sign';
import App from './app/App';
//import Test from './test';
//import ProductDetail from './app/src/screens/productdetailscreen/ProductDetail';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
