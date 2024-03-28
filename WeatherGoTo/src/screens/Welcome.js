import { View, Text,SafeAreaView,Image } from 'react-native'
import React, { useEffect } from 'react'



const Welcome = ({navigation}) => {
    useEffect(() => {
        const reroute = setTimeout(() => {
          navigation.navigate('Home');
        }, 5000);
        return () => clearTimeout(reroute);
      }, []);
    return (
            <SafeAreaView className="flex justify-center items-center bg-red-500 h-screen">
                <Text className="text-5xl text-white">Weather Go</Text>
                {/* <Image source={require('../assests/sun.gif')} /> */}
            </SafeAreaView>
    )
}

export default Welcome