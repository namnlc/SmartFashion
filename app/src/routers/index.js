import React from 'react';
import {AuthProvider} from './AuthProvider';
import RootNavigator from './RootNavigator';

export default function Providers() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
