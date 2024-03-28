import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity, StyleSheet, Linking, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modal, Portal, IconButton, Searchbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native'
import BottomNavigator from '../components/BottomNavigator'
import ScannerImg from '../../../assets/barcode-scanner.png'

const UpdateDrsDetails = ({ navigation }) => {
    const route = useRoute();
    const [myState, setMyState] = useState(route.params || '');
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [mobileNumber, setMobileNumber] = useState('1234567890');
    const [whatsAppMsg, setWhatsAppMsg] = useState(
      'Message',
    );

    useEffect(() => {
        setMyState(route.params || ''); // update state when route params change
    }, [route.params]);

    const openWhatsApp = () => {
        let url =
        'whatsapp://send?text=' + 
         whatsAppMsg +
        '&phone=91' + mobileNumber;
      Linking.openURL(url)
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
      };

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
                <View className='h-[10%] flex-row'>
                    <View className='w-[70%] flex-1 justify-center mx-4'>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            className=' rounded-xl border-b-0'
                            mode='bar'
                        />
                    </View>
                    <TouchableOpacity className=' justify-center items-center mr-4' onPress={() => navigation.navigate('Scanner', { routeName: currentRouteName })}>
                        <Image source={ScannerImg} resizeMode='contain' style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <View className='h-[70%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <View className='flex-row my-3 mx-5'>
                        <View className='w-[50%]'>
                            <Text className='font-extrabold text-base'>Pending Waybill: 0</Text>
                        </View>
                        <View className='flex-row'>
                            <Text className='font-extrabold text-base'>Total Pieces: 1</Text>
                        </View>
                    </View>
                    <View className='mx-5 mt-3'>
                        <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-2'>
                            <View className='mb-3'>
                                <Text className='text-lg font-extrabold'>{myState.scannedValue}</Text>
                            </View>
                            <View className='flex-row mb-1'>
                                <View className='flex-row w-[40%]'>
                                    <Text className='font-bold'>Weight:</Text>
                                    <Text className='pl-1 text-[#009fd2]'>1,000</Text>
                                </View>
                                <View className='flex-row'>
                                    <Text className='font-bold'>COD:</Text>
                                    <Text Text className='pl-1 text-[#009fd2]'>RM0</Text>
                                </View>
                            </View>
                            <View className='mb-2'>
                                <Text className=''>121,ABC,DDFF,JERANTUT,PAHANG,MALAYSIA,27000</Text>
                            </View>
                            <View className='flex-row'>
                                <View className='flex-1 justify-end'>
                                    <Text className='bg-orange-300 w-20 text-xs rounded-lg justify-center pl-2 py-1'>In-progress</Text>
                                </View>
                                <View className='flex-row'>
                                    <TouchableOpacity onPress={openWhatsApp} className='h-11 w-11 rounded-full bg-orange-500 items-center justify-center ml-3'>
                                        <MaterialIcon name="whatsapp" size={25} color='white' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={openPhoneDial} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                        <Icon name="phone" size={25} color='#009fd2' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={openGoogleMaps} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                        <Icon name="location-pin" size={25} color='#009fd2' />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: myState.scannedValue }) }} className='h-11 w-11 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                        <Icon name="chevron-right" size={30} color='white' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation} />
        </SafeAreaView>
    )
}

export default UpdateDrsDetails

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
})