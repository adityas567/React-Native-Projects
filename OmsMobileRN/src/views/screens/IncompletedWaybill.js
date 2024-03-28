import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { useRoute } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Formik } from 'formik';


const initialValue1 = {
    RecivedBy: '',
    IcNumber: '',
    Remarks: ''
}

const initialValue2 = {
    ReasonForFailure: '',
    Remarks: ''
}

const FormComponent1 = () => {
    return (
        <Formik
            initialValues={initialValue1}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View className='mt-5'>
                    <Text>Recived By*</Text>
                    <TextInput className='border-[0.3px] border-y-[0.1px] h-10 my-2 rounded'
                        onChangeText={handleChange('RecivedBy')}
                        value={values.RecivedBy}
                    />
                    <Text>IC Number*</Text>
                    <TextInput className='border-[0.3px] border-y-[0.1px] h-10 my-2 rounded'
                        onChangeText={handleChange('IcNumber')}
                        value={values.IcNumber}
                    />
                    <Text>Remarks</Text>
                    <TextInput className='border-[0.3px] border-t-[0.1px] h-10 my-2 rounded'
                        onChangeText={handleChange('Remarks')}
                        value={values.Remarks}
                    />
                    <View className='flex-row'>
                    <View className='flex-row mt-2 w-[50%]'>
                        <Text className='text-xs'>Signature</Text>
                        <TouchableOpacity className='mx-2'>
                            <Icon name="camera-alt" size={15} color='#009fd2' />
                        </TouchableOpacity>
                        <Text className='text-xs'>Not Captured</Text>
                    </View>
                    <View className='flex-row my-2 w-[50%] justify-end'>
                        <Text className='text-xs'>POD 1</Text>
                        <TouchableOpacity className='mx-2'>
                            <Icon name="camera-alt" size={15} color='#009fd2' />
                        </TouchableOpacity>
                        <Text className='text-xs'>Not Captured</Text>
                    </View>
                    </View>
                    <View className='flex-row mt-2 justify-end mb-3'>
                        <Text className='text-xs'>POD 2</Text>
                        <TouchableOpacity className='mx-2'>
                            <Icon name="camera-alt" size={15} color='#009fd2' />
                        </TouchableOpacity>
                        <Text className='text-xs'>Not Captured</Text>
                    </View>
                    <View className='flex-row mt-2 mb-5'>
                        <Text className='text-xs'>DO</Text>
                        <TouchableOpacity className='mx-2'>
                            <Icon name="camera-alt" size={15} color='#009fd2' />
                        </TouchableOpacity>
                        <Text className='text-xs'>Not Captured</Text>
                    </View>
                    <TouchableOpacity className='p-2 rounded items-center bg-blue-400 mb-3' onPress={handleSubmit}>
                            <Text className='text-white font-bold'>UPDATE ITEM</Text>
                        </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
};
const FormComponent2 = () => {
    return (
        <Formik
            initialValues={initialValue2}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View className='mt-5'>
                    <Text>Reason For Failure</Text>
                    <TextInput className='border-[0.3px] border-y-[0.1px] h-10 my-2 rounded'
                        onChangeText={handleChange('ReasonForFailure')}
                        value={values.ReasonForFailure}
                    />
                    <Text>Remarks</Text>
                    <TextInput className='border-[0.3px] border-t-[0.1px] h-10 my-2 rounded'
                        onChangeText={handleChange('Remarks')}
                        value={values.Remarks}
                    />
                    <View className='flex-row mt-2 mb-5 w-[50%]'>
                        <Text className='text-xs'>Proof</Text>
                        <TouchableOpacity className='mx-2'>
                            <Icon name="camera-alt" size={15} color='#009fd2' />
                        </TouchableOpacity>
                        <Text className='text-xs'>Not Captured</Text>
                    </View>
                    <TouchableOpacity className='p-2 rounded items-center bg-blue-400 mb-3' onPress={handleSubmit}>
                            <Text className='text-white font-bold'>UPDATE ITEM</Text>
                        </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
};

const FirstRoute = () => (
    <FormComponent1 />
);
const SecondRoute = () => (
    <FormComponent2 />
);

const initialLayout = { width: Dimensions.get('window').width };

const UnCompletedWaybill = ({ navigation }) => {
    const route = useRoute();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Delivered', color: 'white' },
        { key: 'second', title: 'Undelivered', color: 'white' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    const [myState, setMyState] = useState(route.params || '');
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
                        <TouchableOpacity className='' onPress={() => navigation.navigate('Drs-Details')}>
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
                <ScrollView>
                    <View className='mb-5 mt-7 mx-4 px-5 rounded-lg bg-white' style={styles.boxElevated}>
                        <View className='flex-row my-3'>
                            <View className='flex-1'>
                                <Text className='font-extrabold text-base'>Order Details</Text>
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
                            </View>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Waybill Number
                            </Text>
                            <Text className='font-bold'>
                                {myState.scannedValue}
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Booked On
                            </Text>
                            <Text className='font-bold'>
                                06/04/2023 15:37:47
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Consignee
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                Rehan
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Adress
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                121,abc,ddff,Jerantut,Pahang,Malaysia,27000
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Quantity
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                1
                            </Text>
                        </View>

                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                DO Required
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                No
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                COD Amount
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                RM 100.0
                            </Text>
                        </View>
                        <View className='flex-row' style={styles.customSpacing}>
                            <Text className='font-light text-sm w-[50%]'>
                                Amount to be Collected
                            </Text>
                            <Text className='font-bold flex-1 flex-wrap '>
                                RM 100.0
                            </Text>
                        </View>
                        <TouchableOpacity className='p-2 rounded items-center bg-blue-400 mb-3'>
                            <Text className='text-white font-bold'>Online Payment</Text>
                        </TouchableOpacity>
                        <View className='flex-row justify-between mb-5'>
                            <TouchableOpacity className='p-2 rounded items-center bg-blue-400 w-[48%] '>
                                <Text className='text-white font-bold'>Pay Hard Cash</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='p-2 rounded items-center w-[48%] border-[0.5px] '>
                                <Text className='font-bold'>Cancel Hard Cash</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className='font-extrabold text-black mb-5'>Update DRS</Text>
                        <View>
                            <Text>Status</Text>
                        </View>
                        <View className='h-[500] my-4 '>
                            <TabView
                                navigationState={{ index, routes }}
                                renderTabBar={props => (
                                    <TabBar
                                        {...props}
                                        indicatorStyle={{ backgroundColor: 'orange', height: 70 }}
                                        style={{ backgroundColor: 'white' }}
                                        activeColor="#f0edf6"
                                        inactiveColor="#3e2465"
                                        renderLabel={({ route, color }) => (
                                            <Text style={{ color: color, margin: 2, fontSize: 14, fontWeight: 'bold' }}>
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
                    </View>


                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UnCompletedWaybill

const styles = StyleSheet.create({
    customSpacing: {
        marginBottom: 20
    },
})