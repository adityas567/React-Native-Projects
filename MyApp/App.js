import { View, Text } from 'react-native'
import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('./app/screens/Home'));

export default function App() {
  return (
    <View className='w-[100%] h-[100%]'>
      <Suspense fallback={<View><Text>...............</Text></View>}>
      <Home/>
      </Suspense>
      
    </View>
  )
}