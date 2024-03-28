import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import React from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native';

const BottomNavigator = ({navigation}) => {
  return (

        <View className="h-[10%] relative border-t-[0.2px] flex flex-row justify-around mt-auto pb-3" style={styles.transParentBG}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} className='h-[90%] w-[25%]  flex justify-center items-center'>
                    <Image className='h-7 w-7 mb-1 mt-2' source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9068/9068165.png' }}></Image>
                    <Text className='text-md font-extrabold'>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity className='h-[90%] w-[25%] flex justify-center items-center' onPress={()=>navigation.navigate('Home')}>
                    <Image className='h-7 w-7 mb-1 mt-2' source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747327.png' }}></Image>
                    <Text className='text-md font-extrabold'>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity className='h-[90%] w-[25%] flex justify-center items-center'>
                    <Image className='h-7 w-7 mb-1 mt-2' source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2529/2529521.png' }}></Image>
                    <Text className='text-md font-extrabold'>Notification</Text>
                </TouchableOpacity>
            </View>
  )
}

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
    transParentBG: {
        backgroundColor: 'white',
        opacity: 0.8
    }
});

export default BottomNavigator