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

const UpdateDrs = ({ navigation }) => {
    const route = useRoute();
    const currentRouteName = route.name;
    const [items, SetItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [value, setValue] = useState(true);
    const [myState, setMyState] = useState(route.params || '');

    // console.log(currentRouteName);
    useEffect(() => {
        setMyState(route.params || '');
        SetItems(myState.scannedValue);
    }, [route.params]);

    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>UPDATE DRS</Text>
                        </View>
                        <TouchableOpacity className='bg-white rounded-3xl h-8 w-24 justify-center items-center'>
                            <Text className='font-bold'>Create Drs</Text>
                        </TouchableOpacity>
                        <View className='items-end flex-1'>
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
                    <TouchableOpacity className=' justify-center items-center mr-4' onPress={() => navigation.navigate('Scanner',{routeName:currentRouteName})}>
                        <Image source={ScannerImg} resizeMode='contain' style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <View className='h-[70%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <ScrollView>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <View className='flex-row mt-3 mx-3'>
                                <View className='flex-row items-center mr-4'>
                                    <RadioButton value={true} status='checked' color='#009fd2' />
                                    <Text className='text-[#009fd2] mx-2' style={styles.customFont}>Open DRS Only</Text>
                                </View>
                                <View className='flex-row items-center'>
                                    <RadioButton value={false} color='#009fd2' />
                                    <Text className='text-[#009fd2] mx-2' style={styles.customFont}>All DRS()</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                        {
                            value ?

                                <View className='mx-5 mt-1'>
                                    <Text className='font-extrabold mb-4'>DRS List</Text>
                                    <ScrollView>
                                    <TouchableOpacity className='border-[#009fd2] border-[0.5px] rounded-lg h-32 px-4 pt-4 mb-2' onPress={()=>navigation.navigate('Drs-Details',{scannedValue: myState.scannedValue})}>
                                        <View className='mb-2'>
                                            <Text className='text-lg font-extrabold'>{myState.scannedValue}</Text>
                                        </View>
                                        <View className='flex-row mb-1'>
                                            <View className='flex-row'>
                                                <Text className='font-bold'>DRS Creation Date:</Text>
                                                <Text Text className='pl-1 text-[#009fd2]'>06/04/2023</Text>
                                            </View>
                                        </View>
                                        <View className='mb-2 flex-row'>
                                            <Text className='font-extrabold'>Waybills:</Text>
                                            <Text className='pl-1 text-[#009fd2]'>1</Text>
                                            <View className='flex-1 items-end'>
                                                <Text className='bg-orange-100 w-10 text-xs rounded-lg justify-center pl-2 py-1'>New</Text>
                                            </View>
                                        </View>
                                        <View className='flex-row'>

                                        </View>
                                    </TouchableOpacity>
                                    </ScrollView>
                                </View>
                                :
                                <Text>Hi</Text>

                        }
                    </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation}/>
        </SafeAreaView>
    )
}

export default UpdateDrs

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
});