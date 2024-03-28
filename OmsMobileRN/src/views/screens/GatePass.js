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

const GatePass = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView className='h-[100%]'>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='mr-2'>
                            <Text className='text-white font-extrabold text-lg'>GATEPASS</Text>
                        </View>
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
                </View>
                <View className='h-[70%] mt-2 mx-4 rounded-lg bg-white' style={styles.boxElevated}>
                    <ScrollView>
                        <Text className='mt-3 mx-5 text-base text-black font-bold'>Gate Pass List</Text>
                    </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation}/>
        </SafeAreaView>
    )
}

export default GatePass

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
});