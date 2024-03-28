import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { useRoute } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'

const WaybillDeatils = ({navigation}) => {
    const route = useRoute();
    const [myState, setMyState] = useState(route.params || '');
    useEffect(() => {
        setMyState(route.params || ''); // update state when route params change
    }, [route.params]);

    const openGoogleMaps = () => {
        const address = '1600 Amphitheatre Parkway, Mountain View, CA 94043';
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    }

    const openPhoneDial = () => {
        const phoneNumber = '1234567890';
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    }
    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <TouchableOpacity className='' onPress={() => navigation.navigate('Update-Drs')}>
                            <Icons name="arrowleft" size={30} color='white' />
                        </TouchableOpacity>
                        <View className='flex-1 items-center'>
                            <Text className='text-white font-extrabold text-lg'>{myState.scannedValue}</Text>
                        </View>
                        <View className='items-center'>
                            <Image source={UserIcon} />
                        </View>
                    </View>
                </View>
                <View className='h-[70%] mt-7 mx-4 px-5 rounded-lg bg-white' style={styles.boxElevated}>
                    <View className='flex-row my-3'>
                        <View className='flex-1'>
                            <Text className='font-extrabold text-base'>Order Details</Text>
                        </View>
                        <View className='flex-row'>
                            <TouchableOpacity onPress={openPhoneDial} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                <Icon name="phone" size={25} color='#009fd2' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openGoogleMaps} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                <Icon name="location-pin" size={25} color='#009fd2' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Waybill Number
                        </Text>
                        <Text className='font-bold'>
                        {myState.scannedValue}
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Booked On
                        </Text>
                        <Text className='font-bold'>
                            06/04/2023 15:37:47
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Consignee
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            Rehan
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Adress
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            121,abc,ddff,Jerantut,Pahang,Malaysia,27000
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Route Code
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            DTEM
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Quantity
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            2
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            COD Amount
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            RM 0
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            DO Required
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            No
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-light text-sm w-[40%]'>
                            Status
                        </Text>
                        <View className='font-bold flex-1 h-16 items-end'>
                            <View className='w-28 h-10 items-center justify-center rounded bg-orange-600'>
                                <Text className='text-white font-extrabold'>RTS Delivered</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default WaybillDeatils

const styles = StyleSheet.create({})