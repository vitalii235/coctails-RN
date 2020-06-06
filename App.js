import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './navigation/AppNavigation';
import { CoctailProvider } from './ContextAPI';

export default function App() {
  return (
    <NavigationContainer>
      <CoctailProvider>
        <AppNavigation />
      </CoctailProvider>
    </NavigationContainer>
  );
}
