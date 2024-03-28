import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient'
import LogoImage from '../../../assets/logo-new.png'
import BgImage from '../../../assets/bg-nms.png'

const Login = ({ navigation }) => {
    
    return (
        <View className='h=[100%]'>
            {/* <LinearGradient colors={['#ffffff', '#009fd2']} className='h-[100%]' start={{ x: 1 , y: 0.5 }} end={{ x:1 , y:1 }}> */}
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='h-[45%] justify-center items-center'>
                    <View className='mb-5'>
                        <Image source={LogoImage} resizeMode="contain"/>
                    </View>
                    <View className='items-center mt-5'>
                        <Text>
                            Sign in to your account to start perform the pickup
                        </Text>
                        <Text>
                            and delivery
                        </Text>
                    </View>

                </View>
                <View className='h-[40%] mt-16 pt-3'>
                    <View className='mb-5 mx-3'>
                        <Button mode="elevated" buttonColor='#009fd2' textColor='white' onPress={() => navigation.navigate('NumberLogin')}>
                            <Text className='text-lg font-bold' style={{fontSize:16}}>SIGN IN</Text>
                        </Button>
                    </View>
                    <View className='mb-3 mx-3'>
                        <Button mode="elevated" buttonColor='white' textColor='#009fd2'>
                            <Text className='text-lg font-bold' style={{fontSize:16}}>FORGOT YOUR PASSWORD</Text>
                        </Button>
                    </View>
                </View>
                <View className='h-[10%] items-center mt-4'>
                    <Text className=' text-white'>Terms & Condition</Text>
                </View>

            </ImageBackground>
            {/* </LinearGradient> */}

        </View>
    )
}

export default Login