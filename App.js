import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawNavigator />
    </NavigationContainer>
  );
}