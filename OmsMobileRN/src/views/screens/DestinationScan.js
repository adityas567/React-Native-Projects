import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { React, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomNavigator from '../components/BottomNavigator'

const DestinationScan = ({ navigation }) => {
    const [items, SetItems] = useState([]);


    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>DESTINATION SCAN</Text>
                        </View>
                        <TouchableOpacity className='items-end flex-1' onPress={() => navigation.navigate('Profile-Details')}>
                            <Image source={UserIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='h-[80%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <ScrollView>
                        <View className='mx-5 mt-5'>
                            <ScrollView>
                                <View className='flex-row mt-2 pb-7 border-b-[0.8px] border-b-[#009fd2]'>
                                    <View className='absolute mt-2 ml-2'>
                                        <Icon name="scan-helper" size={20} color='#009fd2' />
                                    </View>
                                    <TextInput className='border-[0.5px] border-[#009fd2] flex-1 p-1 pl-10 rounded' />
                                    <TouchableOpacity className='w-[25%] justify-center items-center bg-[#009fd2] ml-2 rounded'>
                                        <Text className='text-white'>Scan</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation} />
        </SafeAreaView>
    )
}

export default DestinationScan

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
});