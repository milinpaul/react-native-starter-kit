import React from 'react';
import { StatusBar } from 'expo-status-bar';

import RootApp from './src';

export default function App() {
  return (
    <>
      <StatusBar style='auto' backgroundColor='red' />
      <RootApp />
    </>
  );
}
