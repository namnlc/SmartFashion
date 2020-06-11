// src/contexts/index.tsx
import React from 'react'
import { CounterStore } from './counter'

export const storesContext = React.createContext({
  counterStore: new CounterStore()
})
export const useStores = () => React.useContext(storesContext)
