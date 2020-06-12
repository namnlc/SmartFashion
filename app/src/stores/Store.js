// src/contexts/index.tsx
import React from 'react';
import {SignStore} from './SignStore';

export const storesContext = React.createContext({
  signStore: new SignStore(),
});
export const useStores = () => React.useContext(storesContext);
