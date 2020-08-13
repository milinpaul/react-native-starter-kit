import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootTabNavigation } from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootTabNavigation />
    </NavigationContainer>
  );
}
