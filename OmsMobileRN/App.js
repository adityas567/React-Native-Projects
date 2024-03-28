import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/views/components/navigation/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <MyStack></MyStack>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App