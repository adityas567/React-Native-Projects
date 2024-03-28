import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { useFetchQuery } from '../../queries/useFetchQuery'
import { RadioButton, Searchbar, Badge } from 'react-native-paper'
import ScannerImg from '../../../assets/barcode-scanner.png'
import { React, useEffect, useState } from 'react';
import { DrawerActions, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigator from '../components/BottomNavigator'

const ReAssignDrs = ({ navigation }) => {
    const [items, SetItems] = useState([]);


    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>RE-ASSIGN DRS</Text>
                        </View>
                        <TouchableOpacity className='items-end flex-1' onPress={()=>navigation.navigate('Profile-Details')}>
                            <Image source={UserIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='h-[80%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <ScrollView>
                        <View className='mx-5 mt-5'>
                            <Text className='font-extrabold mb-4'>DRS List</Text>
                            <ScrollView>
                                <TouchableOpacity className='border-[#009fd2] border-[0.5px] rounded-lg h-24 px-4 pt-4 mb-2 flex-row'>
                                    <View className='w-[80%]'>
                                        <View className='mb-2'>
                                            <Text className='text-lg font-extrabold'>DRS/DBTW/2304/000028</Text>
                                        </View>
                                        <View className='flex-row mb-1'>
                                            <View className='flex-row'>
                                                <View className='mr-3'>
                                                    <Text className='font-bold'>Quantity: 0</Text>
                                                </View>
                                                <View className='flex-row'>
                                                    <Text className='font-bold'>Route ID: </Text>
                                                    <Text Text className='pl-1 text-[#009fd2]'>DKLG</Text>
                                                </View>

                                            </View>

                                        </View>
                                    </View>
                                    <View className='items-center justify-center mb-2 w-[20%]'>
                                        <Text className='bg-orange-100 w-10 text-xs rounded-lg justify-center pl-2 py-1'>New</Text>
                                    </View>

                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation}/>
        </SafeAreaView>
    )
}

export default ReAssignDrs

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
});