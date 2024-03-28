import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { React, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import BottomNavigator from '../components/BottomNavigator'
import { Avatar, List } from 'react-native-paper';

const Profile = ({ navigation }) => {
    const [items, SetItems] = useState([]);
    const [expandedId, setExpandedId] = useState(true);
    const handleAccordionPress = (accordionId) => {
        setExpandedId(accordionId === expandedId ? '' : accordionId);
    };

    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>My Profile</Text>
                        </View>
                        <TouchableOpacity className='items-end flex-1' onPress={() => navigation.navigate('Profile-Details')}>
                            <Image source={UserIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='h-full mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <View className='mx-5 mt-5'>
                        <ScrollView>
                            <View className='mb-5'>
                                <Avatar.Image size={90} source={require('../../../assets/hacker.png')} />
                            </View>
                            <View className='mb-10'>
                                <View className='flex-row mb-2'>
                                    <View>
                                        <Text className='font-extrabold text-base'>
                                            Email:
                                        </Text>
                                    </View>
                                    <View className='flex-1 items-end'>
                                        <Text >
                                            Priyambada@esspl.com
                                        </Text>
                                    </View>
                                </View>
                                <View className='flex-row'>
                                    <View>
                                        <Text className='font-extrabold text-base'>
                                            Mobile Number:
                                        </Text>
                                    </View>
                                    <View className='flex-1 items-end'>
                                        <Text >
                                            0123456789
                                        </Text>
                                    </View>
                                </View>
                                <List.AccordionGroup expandedId={expandedId}
                                    onAccordionPress={handleAccordionPress}>
                                    <List.Section>
                                        <List.Accordion
                                            className='h-16 justify-center bg-gray-300 p-1 pl-2 mt-3'
                                            title="Profile Information"
                                            titleStyle={{ fontSize: 15, color: '#009fd2', fontWeight: 'bold' }}
                                            left={() => (<Icon name='user-circle' size={25} style={{ marginHorizontal: 5 }} />)}
                                            right={props => <List.Icon {...props} icon={expandedId === '1' ? 'minus' : 'plus'} color='#009fd2' />}
                                            id='1'>
                                            <List.Item left={() => { }} className='border-[0.3px] border-y-0' description={() =>
                                            (
                                                <View>
                                                    <View className='mb-2'>
                                                        <Text className='text-base'>Profile Photo</Text>
                                                        <TouchableOpacity className='bg-blue-500 h-10 w-[40%] mt-2 rounded items-center justify-center'>
                                                            <Text className='text-white'>Upload</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View className=''>
                                                        <Text className='text-base mt-2'>Agent Type</Text>
                                                        <View style={styles.customInput}>
                                                            <Text>Both Agent</Text>
                                                        </View>
                                                        <Text className='text-base mt-2'>Agent Code</Text>
                                                        <View style={styles.customInput}>
                                                            <Text>priyatest</Text>
                                                        </View>
                                                        <Text className='text-base mt-2'>Name</Text>
                                                        <View style={styles.customInput}>
                                                            <Text>Shaikh Rehan Ahemad</Text>
                                                        </View>
                                                        <Text className='text-base mt-2'>Agent IC</Text>
                                                        <View style={styles.customInput}>
                                                            <Text>Both Agent</Text>
                                                        </View>
                                                    </View>
                                                </View>


                                            )}>
                                            </List.Item>
                                        </List.Accordion>
                                    </List.Section>
                                </List.AccordionGroup>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation} />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
    customInput:
    {
        borderWidth: 0.2,
        borderColor: 'red',
        padding: 12,
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 2,
        marginTop: 10
    }
});