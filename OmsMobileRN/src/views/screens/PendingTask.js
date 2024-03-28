import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { React, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomNavigator from '../components/BottomNavigator'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const FirstRoute = ({ navigation }) => {

    const route = useRoute();
    const [expandedId, setExpandedId] = useState(true);
    const handleAccordionPress = (accordionId) => {
        setExpandedId(accordionId === expandedId ? '' : accordionId);
    };
    const [mobileNumber, setMobileNumber] = useState('1234567890');
    const [whatsAppMsg, setWhatsAppMsg] = useState(
        'Message',
    );
    const listItemStyle = {
        marginVertical: -10, // Change the vertical margin
        marginHorizontal: -15, // Change the horizontal margin
      };


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
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} className='m-4'>
            <View className='flex-row'>
                <Text className='text-base font-extrabold'>
                    Status:
                </Text>
                <Text className='text-base ml-2'>
                    Pending
                </Text>
            </View>
            <View className='h-24 rounded-lg mt-6 bg-[#009fd2] justify-around p-3 pl-4'>
                <Text className='text-white font-bold'>Total Shipment Recived:109/112</Text>
                <Text className='text-white font-bold'>Ready to Audit Count:0</Text>
            </View>
            <List.AccordionGroup expandedId={expandedId}
                onAccordionPress={handleAccordionPress}>
                <List.Section>
                    <List.Accordion
                        className='rounded-lg h-11 bg-blue-100 p-1 pl-2 mt-3'
                        title="List of parcel need to be audit count scan(0)"
                        titleStyle={{ fontSize: 13, color: '#009fd2', fontWeight: 'bold' }}
                        right={props => <List.Icon {...props} icon={expandedId === '1' ? 'minus' : 'plus'} color='#009fd2' />}
                        id='1'>
                        <List.Item style={listItemStyle} description={() => (
                            <View className='rounded-lg bg-white w-full' style={styles.boxElevated}>
                                <View className=''>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openWhatsApp} className='h-9 w-9 rounded-full bg-orange-500 items-center justify-center ml-3'>
                                                    <MaterialIcon name="whatsapp" size={20} color='white' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openWhatsApp} className='h-9 w-9 rounded-full bg-orange-500 items-center justify-center ml-3'>
                                                    <MaterialIcon name="whatsapp" size={20} color='white' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )} />
                    </List.Accordion>
                    <List.Accordion
                        className='rounded-lg h-11 bg-blue-100 p-1 pl-2 mt-3'
                        title="Pending Delivery()"
                        titleStyle={{ fontSize: 13, color: '#009fd2', fontWeight: 'bold' }}
                        id='2'
                        right={props => <List.Icon {...props} icon={expandedId === '2' ? 'minus' : 'plus'} color='#009fd2' />}>
                        <List.Item style={listItemStyle} description={() => (
                            <View className='rounded-lg bg-white w-full' style={styles.boxElevated}>
                                <View className=''>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openWhatsApp} className='h-9 w-9 rounded-full bg-orange-500 items-center justify-center ml-3'>
                                                    <MaterialIcon name="whatsapp" size={20} color='white' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openWhatsApp} className='h-9 w-9 rounded-full bg-orange-500 items-center justify-center ml-3'>
                                                    <MaterialIcon name="whatsapp" size={20} color='white' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )} />
                    </List.Accordion>
                </List.Section>
            </List.AccordionGroup>

        </ScrollView>
    );
}

const SecondRoute = () => {
    const route = useRoute();
    const [expandedId, setExpandedId] = useState(true);
    const handleAccordionPress = (accordionId) => {
        setExpandedId(accordionId === expandedId ? '' : accordionId);
    };

    const listItemStyle = {
        marginVertical: -10, // Change the vertical margin
        marginHorizontal: -15, // Change the horizontal margin
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
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} className='m-4'>
            <View className='flex-row'>
                <Text className='text-base font-extrabold'>
                    Status:
                </Text>
                <Text className='text-base ml-2'>
                    Pending
                </Text>
            </View>
            <View className='h-24 rounded-lg mt-6 bg-[#009fd2] justify-around p-3 pl-4'>
                <Text className='text-white font-bold'>Total Shipment Recived:109/112</Text>
                <Text className='text-white font-bold'>Ready to Audit Count:0</Text>
            </View>
            <List.AccordionGroup expandedId={expandedId}
                onAccordionPress={handleAccordionPress}>
                <List.Section>
                    <List.Accordion
                        className='rounded-lg h-11 bg-blue-100 p-1 pl-2 mt-3'
                        title="Total Parcel Needs To Be Handover(12)"
                        titleStyle={{ fontSize: 13, color: '#009fd2', fontWeight: 'bold' }}
                        right={props => <List.Icon {...props} icon={expandedId === '1' ? 'minus' : 'plus'} color='#009fd2' />}
                        id='1'>
                        <List.Item style={listItemStyle} description={() => (
                            <View className='rounded-lg bg-white w-full' style={styles.boxElevated}>
                                <View className=''>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )} />
                    </List.Accordion>
                    <List.Accordion
                        className='rounded-lg h-11 bg-blue-100 p-1 pl-2 mt-3'
                        title="Pending Pickup()"
                        titleStyle={{ fontSize: 13, color: '#009fd2', fontWeight: 'bold' }}
                        id='2'
                        right={props => <List.Icon {...props} icon={expandedId === '2' ? 'minus' : 'plus'} color='#009fd2' />}>
                        <List.Item style={listItemStyle} description={() => (
                            <View className='rounded-lg bg-white w-full' style={styles.boxElevated}>
                                <View className=''>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View className='border-[#009fd2] border-[0.5px] rounded-lg h-44 px-4 pt-4 mb-5'>
                                        <View className='mb-3'>
                                            <Text className='text-lg font-extrabold'>ZND4231342</Text>
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
                                                <TouchableOpacity onPress={openPhoneDial} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="phone" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={openGoogleMaps} className='h-9 w-9 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                                    <Icon name="location-pin" size={20} color='#009fd2' />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Waybill-Details', { scannedValue: zndddd }) }} className='h-9 w-9 rounded-full bg-[#009fd2] items-center justify-center ml-3'>
                                                    <Icon name="chevron-right" size={25} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )} />
                    </List.Accordion>
                </List.Section>
            </List.AccordionGroup>

        </ScrollView>
    );
}

const initialLayout = { width: Dimensions.get('window').width };

const PendingTask = ({ navigation }) => {
    const [items, SetItems] = useState([]);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Delivery' },
        { key: 'second', title: 'Pickup' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });


    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>PENDING TASK</Text>
                        </View>
                        <TouchableOpacity className='items-end flex-1' onPress={() => navigation.navigate('Profile-Details')}>
                            <Image source={UserIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='h-full mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <ScrollView>
                        <View className='mt-1'>
                            <ScrollView>
                                <View className='h-[900] bg-white'>
                                    <TabView
                                        navigationState={{ index, routes }}
                                        renderTabBar={props => (
                                            <TabBar
                                                {...props}
                                                indicatorStyle={{ backgroundColor: 'blue' }}
                                                style={{ backgroundColor: 'white' }}
                                                activeColor="#f0edf6"
                                                inactiveColor="#3e2465"
                                                renderLabel={({ route, color }) => (
                                                    <Text style={{ color: 'black', margin: 8, fontSize: 17, fontWeight: 'bold' }}>
                                                        {route.title}
                                                    </Text>
                                                )}
                                            />
                                        )}
                                        renderScene={renderScene}
                                        onIndexChange={setIndex}
                                        initialLayout={initialLayout}
                                    />

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

export default PendingTask

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
});