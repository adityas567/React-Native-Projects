import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { Suspense, lazy } from 'react'
import Image from '../public/bg.jpg'

const Button = lazy(() => import('../components/Button'));

const Home = () => {
    return (
       
            <View className='flex-1'>
                <ImageBackground source={Image} resizeMode="cover" className='flex-1'>
                    <View className='h-[40%] items-center justify-center'>
                        <Text className='text-white font-bold text-5xl'>Welcome</Text>
                    </View>
                </ImageBackground>
            </View>
        
    )
}

export default Home