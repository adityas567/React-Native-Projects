import { View, Text, SafeAreaView,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className="bg-blue-300 h-screen">
        <View>
            <Image source={require('../assests/png-transparent-weather-forecasting-severe-weather-storm-weather-free-text-heart-logo-thumbnail.png')} />
        </View>
    </SafeAreaView>
  )
}

export default Home