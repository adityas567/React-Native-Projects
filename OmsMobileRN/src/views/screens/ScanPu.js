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




const ScanPu = ({ navigation }) => 
{

    const route = useRoute();
    const currentRouteName = route.name;
    const [items, SetItems] = useState([]);
    const [value, setValue] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [myState, setMyState] = useState(route.params || ''); // initialize state with default value
    console.log(currentRouteName)

    useEffect(() => {
        setMyState(route.params || '');
        SetItems(myState.scannedValue);
         // update state when route params change
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

    const handleScan = value => {
        if (value && !items.includes(value)) {
            SetItems([...items, value]);
        } else {
            Alert.alert('already scanned');
        }
    };



    // const { isError, isFetched, isLoading, data } = useFetchQuery('dashboard');
    // console.log(isError, isFetched, isLoading, data)
    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='flex-1'>
                            <Text className='text-white font-extrabold text-lg'>SCAN PU</Text>
                        </View>
                        <View className='items-center'>
                            <Image source={UserIcon} />
                        </View>
                    </View>
                    <View className=' flex-row'>
                        <TouchableOpacity className='bg-white rounded-3xl h-8 w-24 justify-center items-center'>
                            <Text className='font-bold'>SYNC PU</Text>
                        </TouchableOpacity>
                        <View className='ml-5 justify-center'>
                            <Text className='text-white'>Last Sync PU:</Text>
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
                    <TouchableOpacity className=' justify-center items-center mr-4' onPress={() => navigation.navigate('Scanner',{routeName:currentRouteName})}>
                        <Image source={ScannerImg} resizeMode='contain' style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <View className='h-[65%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                <ScrollView>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <View className='flex-row mt-3 mx-3'>
                            <View className='flex-row items-center mr-4'>
                                <RadioButton value={true} status='checked' color='#009fd2' />
                                <Text className='text-[#009fd2] mx-2' style={styles.customFont}>Open Pu Only</Text>
                            </View>
                            <View className='flex-row items-center'>
                                <RadioButton value={false} color='#009fd2' />
                                <Text className='text-[#009fd2] mx-2' style={styles.customFont}>All Pu()</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    {
                        value ?
                            <View className='mx-5 mt-3'>
                                <View className='border-[#009fd2] border-[0.5px] rounded-lg h-48 px-4 pt-4 mb-2'>
                                    <View className='mb-3'>
                                        <Text className='text-lg font-extrabold'>{myState.scannedValue}</Text>
                                    </View>
                                    <View className='flex-row mb-1'>
                                        <View className='flex-row w-[30%]'>
                                            <Text className='font-bold'>Pieces:</Text>
                                            <Text className='pl-1 text-[#009fd2]'>0</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <Text className='font-bold'>Account:</Text>
                                            <Text Text className='pl-1 text-[#009fd2]'>Shaikh Rehan Ahemad</Text>
                                        </View>
                                    </View>
                                    <View className='mb-2'>
                                        <Text className='text-[#009fd2]'>(TEST ACCOUNT)</Text>
                                    </View>
                                    <View className='mb-2'>
                                        <Text className='font-extrabold'>CDA,KAPAR,SELANGOR</Text>
                                    </View>
                                    <View className='flex-row'>
                                        <View className='flex-1'>
                                            <Text className='bg-orange-300 w-20 text-xs rounded-lg justify-center pl-2 py-1'>In-progress</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <TouchableOpacity onPress={openPhoneDial} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                <Icon name="phone" size={25} color='#009fd2' />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={openGoogleMaps} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                <Icon name="location-pin" size={25} color='#009fd2' />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>{navigation.navigate('PuDetails',{scannedValue: myState.scannedValue})}} className='h-11 w-11 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                <Icon name="chevron-right" size={30} color='white' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            :
                            <View className='mx-5 mt-3'>
                                <View className='border-[#009fd2] border-[0.5px] rounded-lg h-48 px-4 pt-4 mb-2'>
                                    <View className='mb-3'>
                                        <Text className='text-lg font-extrabold'>{myState.scannedValue}</Text>
                                    </View>
                                    <View className='flex-row mb-1'>
                                        <View className='flex-row w-[30%]'>
                                            <Text className='font-bold'>Pieces:</Text>
                                            <Text className='pl-1 text-[#009fd2]'>0</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <Text className='font-bold'>Account:</Text>
                                            <Text Text className='pl-1 text-[#009fd2]'>Shaikh Rehan Ahemad</Text>
                                        </View>
                                    </View>
                                    <View className='mb-2'>
                                        <Text className='text-[#009fd2]'>(TEST ACCOUNT)</Text>
                                    </View>
                                    <View className='mb-2'>
                                        <Text className='font-extrabold'>CDA,KAPAR,SELANGOR</Text>
                                    </View>
                                    <View className='flex-row'>
                                        <View className='flex-1'>
                                            <Text className='bg-orange-300 w-20 text-xs rounded-lg justify-center pl-2 py-1'>In-progress</Text>
                                        </View>
                                        <View className='flex-row'>
                                            <TouchableOpacity onPress={openPhoneDial} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                <Icon name="phone" size={25} color='#009fd2' />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={openGoogleMaps} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                <Icon name="location-pin" size={25} color='#009fd2' />
                                            </TouchableOpacity>
                                            <TouchableOpacity className='h-11 w-11 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                <Icon name="chevron-right" size={30} color='white' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                    }
                </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
    transParentBG: {
        backgroundColor: 'white',
        opacity: 0.8
    },
    customInput: {
        borderWidth: 0.5,
        borderColor: '#009fd2'
    },
    customFont: {
        fontSize: 16
    },


    inputContainer: {
        borderWidth: 0.5,
        borderColor: '#009fd2',
        height: 40,
        borderRadius: 7,
        paddingHorizontal: 2,
        paddingVertical: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        maxHeight: 150,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 1,
        marginTop: 100,
    },


});

export default ScanPu