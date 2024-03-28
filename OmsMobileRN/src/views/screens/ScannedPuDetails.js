import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity, StyleSheet, Linking, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import { Modal, Portal, IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { useRoute } from '@react-navigation/native'

const ScannedPuDetails = ({ navigation }) => {
    const route = useRoute();
    const [selectedItem, setSelectedItem] = useState(null);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const showModal1 = () => setModal1Visible(true);
    const hideModal1 = () => setModal1Visible(false);

    const showModal2 = () => setModal2Visible(true);
    const hideModal2 = () => setModal2Visible(false);

    const [myState, setMyState] = useState(route.params || '');

    useEffect(() => {
        setMyState(route.params || ''); // update state when route params change
    }, [route.params]);

    const containerStyle = styles.modalStyle;

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
                        <TouchableOpacity className='' onPress={() => navigation.navigate('Spu')}>
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
                            <Text className='font-extrabold'>Request Details</Text>
                        </View>
                        <View className='flex-row'>
                            <TouchableOpacity onPress={openPhoneDial} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                <Icon name="phone" size={25} color='#009fd2' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openGoogleMaps} className='h-11 w-11 rounded-full bg-[#cce8f0] items-center justify-center ml-3'>
                                <MaterialIcon name="location-pin" size={25} color='#009fd2' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-bold w-[30%]'>
                            Request ID
                        </Text>
                        <Text className='font-bold'>
                            766971
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-bold w-[30%]'>
                            No. Of Pieces
                        </Text>
                        <Text className='font-bold'>
                            0
                        </Text>
                    </View>
                    <View className='flex-row mb-2'>
                        <Text className='font-bold w-[30%]'>
                            Location
                        </Text>
                        <Text className='font-bold flex-1 flex-wrap '>
                            23,CDA,23,CDA,23,CDA,23,CDA,23,CDA,23,CDA,23,CDA,23,CDA,
                        </Text>
                    </View>
                    <View className='flex-row mb-10'>
                        <Text className='font-bold w-[30%]'>
                            Route Code
                        </Text>
                    </View>
                    <View>
                        <Text className='font-bold'>
                            Status
                        </Text>
                    </View>
                    <View className='flex-row h-14 mb-10'>
                        <TouchableOpacity onPress={showModal1} className='w-[50%] items-center justify-center border-[0.2px]'>
                            <Text>Successfull</Text>
                            <Text>Pickup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showModal2} className='w-[50%] items-center justify-center border-[0.2px]'>
                            <Text>Pickup Failure</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='border-[0.2px] mt-3' />
                </View>
            </ImageBackground>
            <Portal>
                <Modal visible={modal1Visible} onDismiss={hideModal1} contentContainerStyle={containerStyle}>
                    <View>
                        <View className='flex-row mb-5'>
                            <View className='flex-1'>
                                <Text className='font-bold text-lg'>Scan Deatils</Text>
                            </View>
                            <TouchableOpacity onPress={hideModal1}>
                                <Icon name="close" size={25} color='#009fd2' />
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row my-2'>
                            <View className='w-[50%]'>
                                <Text>Total Waybill Scanned</Text>
                            </View>
                            <View>
                                <Text className='text-[#009fd2]'>0</Text>
                            </View>
                        </View>
                        <View className='flex-row mb-2'>
                            <View className='w-[50%]'>
                                <Text>Date & Time</Text>
                            </View>
                            <View>
                                <Text className='text-[#009fd2]'>18/04/2023, 12:45:15</Text>
                            </View>
                        </View>
                        <View className='h-44 mt-5 bg-black rounded'>

                        </View>
                        <View className='flex-row mt-5 mb-2'>
                            <View className='absolute mt-2 ml-2'>
                                <Icon name="scan-helper" size={20} color='#009fd2' />
                            </View>
                            <TextInput className='border-[0.5px] border-[#009fd2] flex-1 p-1 pl-10 rounded' />
                            <TouchableOpacity className='w-[25%] justify-center items-center bg-[#009fd2] ml-2 rounded'>
                                <Text className='text-white'>Scan</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView className='border-t-[0.5px] border-[#009fd2] mt-2 h-40'>
                            <View className='my-3'>
                                <Text className='mb-2'>
                                    Recived From:
                                </Text>
                                <TextInput className='border-[0.5px] border-b-[0.9px] border-[#009fd2] h-10 rounded' />
                            </View>
                            <View>
                                <Text className='mb-2'>
                                    IC Number*:
                                </Text>
                                <TextInput className='border-[0.5px] border-[#009fd2] h-10 rounded' />
                            </View>
                        </ScrollView>
                        <View className='flex-row mb-5 mt-5'>
                            <Text>Proof*</Text>
                            <TouchableOpacity className='mx-2'>
                                <Icon name="camera" size={20} color='#009fd2' />
                            </TouchableOpacity>
                            <Text>Not Captured</Text>
                        </View>
                    </View>
                </Modal>
            </Portal>
            <Portal>
                <Modal visible={modal2Visible} onDismiss={hideModal2} contentContainerStyle={containerStyle}>
                    <View>

                        <View className='flex-row mb-5'>
                            <View className='flex-1'>
                                <Text className='font-bold text-lg'>Cancel Details</Text>
                            </View>

                            <TouchableOpacity onPress={hideModal2}>
                                <Icon name="close" size={25} color='#009fd2' />
                            </TouchableOpacity>
                        </View>
                        <View className='my-3'>
                            <View className='mb-2'>
                                <Text className='text-base mb-2'>Reattempt*</Text>
                                <View>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id: '' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Yes' },
                                            { id: '2', title: 'No' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View className='mb-2'>
                                <Text className='text-base mb-2'>Reason*</Text>
                                <View>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id: '' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Yes' },
                                            { id: '2', title: 'Over Working Hours' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text className='text-base mb-2'>Remarks</Text>
                                <TextInput className='pl-5' style={styles.inputContainer} />
                            </View>
                        </View>
                        <View className='flex-row mb-5 mt-2'>
                            <Text>Proof*</Text>
                            <TouchableOpacity className='mx-2'>
                                <Icon name="camera" size={20} color='#009fd2' />
                            </TouchableOpacity>
                            <Text>Not Captured</Text>
                        </View>
                        <View>
                            <TouchableOpacity className='items-center justify-center bg-[#009fd2] h-10 rounded'>
                                <Text className='font-bold text-white'>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Portal>


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
    modalStyle: {
        backgroundColor: 'white',
        padding: 20,
        margin: 7,
        borderRadius: 5
    },
    inputContainer: {
        borderWidth: 0.6,
        borderColor: '#009fd2',
        height: 40,
        borderRadius: 5,
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

export default ScannedPuDetails