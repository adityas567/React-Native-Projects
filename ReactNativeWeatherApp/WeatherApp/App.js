

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/Navigator';

const App = () => {

  return (
    <NavigationContainer>
        <MyStack></MyStack>
    </NavigationContainer>
  );
};


export default App;
