import * as React from 'react';
import WelcomeNavigator from './src/routers/WelcomeNavigator';
import RootNavigator from './src/routers/RootNavigator';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {default as theme} from '../assets/theme/theme.json';

export default () => (
  <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
    <RootNavigator />
  </ApplicationProvider>
);
