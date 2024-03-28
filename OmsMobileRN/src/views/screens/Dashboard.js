import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { Avatar } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Badge } from 'react-native-paper';
import BottomNavigator from '../components/BottomNavigator';

const FirstRoute = () => (
    <ScrollView nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    <View className='flex-row pt-5'>
        <View className='justify-center items-center w-20'>
            <Text>1</Text>
        </View>
        <View className='s justify-center flex-1 pl-5'>
            <Text className='text-lg font-bold'>DRS/XKLU/2304/000012</Text>
            <Text className>Created on:01/04/2023</Text>
            <Text className>New</Text>
        </View>
    </View>
    </ScrollView>
);
const SecondRoute = () => (
    <View>

    </View>
);

const initialLayout = { width: Dimensions.get('window').width };



const Dashboard = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Open Delivery',number:1 },
        { key: 'second', title: 'Open Pickup',number:3 },
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
                    <View className='flex-1'>
                        <Text className='text-white font-extrabold text-lg'>DASHBOARD</Text>
                    </View>
                    <View className='items-center'>
                        <Image source={UserIcon}></Image>
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
                <ScrollView className='h-[100%] mx-5' nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
                    <View className='bg-white h-80 mt-2 pb-3 rounded-xl' style={styles.boxElevated}>
                        <View className='bg-cyan-200 h-24 mx-1 rounded-t-lg flex-row pt-2'>
                            <View className='mx-3'>
                                <Avatar.Image size={90} source={require('../../../assets/hacker.png')} />
                            </View>
                            <View className='flex-1'>
                                <Text className='text-lg font-bold'>Shaikh Rehan Ahemad</Text>
                                <Text className='text-lg'>priyatest</Text>
                                <Text className='text-lg'>DBTW</Text>
                            </View>
                        </View>
                        <View className='flex-row mt-5'>
                            <View className=' w-[50%] items-center'>
                                <Text className='text-lg font-bold'>Delivery</Text>
                                <Text className='font-bold text-xs'>Pending Delivery(PCS)</Text>
                            </View>
                            <View className=' w-[50%] items-center'>
                                <Text className='text-lg font-bold'>Pick Up</Text>
                                <Text className='font-bold text-xs'>Pending Pick Up(location)</Text>
                            </View>
                        </View>
                        <View className='flex-row mt-2 mb-3 ml-2'>
                            <View className=' w-[50%] flex-row'>
                                <View className='justify-end'>
                                    <Text>0/0</Text>
                                </View>
                                <View className=' m-auto'>
                                    <View className='h-16 w-16 rounded-full bg-stone-200 items-center justify-center'>
                                        <View className='h-12 w-12 rounded-full bg-white items-center justify-center'>
                                            <Text className='text-[#009fd2] font-bold text-xl'>0</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View className=' w-[50%] flex-row'>
                                <View className='justify-end '>
                                    <Text>0/0</Text>
                                </View>
                                <View className='m-auto'>
                                    <View className='h-16 w-16 rounded-full bg-stone-200 items-center justify-center'>
                                        <View className='h-12 w-12 rounded-full bg-white items-center justify-center'>
                                            <Text className='text-[#009fd2] font-bold text-xl'>0</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='flex-row mt-2'>
                            <View className=' w-[50%] items-center'>
                                <Text className='font-bold text-xs'>Pending Audit count</Text>
                            </View>
                            <View className=' w-[50%] items-center'>
                                <Text className='font-bold text-xs'>Pending Handover</Text>
                            </View>
                        </View>

                        <View className='flex-row mt-2'>
                            <View className=' w-[50%] items-center pl-8'>
                                <View className='h-16 w-16 rounded-full bg-[#009fd2] items-center justify-center'>
                                    <Text className='text-white font-bold text-xl'>0</Text>
                                </View>
                            </View>
                            <View className=' w-[50%] items-center pl-8'>
                                <View className='h-16 w-16 rounded-full bg-[#009fd2] items-center justify-center'>
                                    <Text className='text-white font-bold text-xl'>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='h-32 mt-2 border-[0.2px] rounded-xl flex-row bg-white' style={styles.boxElevated}>
                        <View className='w-[50%] h-[100%] pt-4 pb-2'>
                            <View className='items-center'>
                                <Text className='font-bold text-lg'>Pending COD</Text>
                            </View>
                            <View className=' w-full mt-2 ml-1 flex-row'>
                                <View className='justify-end '>
                                    <Text>0/0</Text>
                                </View>
                                <View className='m-auto'>
                                    <View className='h-16 w-16 rounded-full bg-[#009fd2] items-center justify-center'>
                                        <Text className='text-white font-bold text-xl'>0</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='w-[50%] h-[100%] pt-4 pb-2'>
                            <View className='items-center'>
                                <Text className='font-bold text-lg'>Pending Collect</Text>
                                <Text className='text-xs text-blue-400 font-bold'>RM 0.00</Text>
                            </View>
                            <View className='items-center'>
                                <Text className='font-bold text-lg'>Amount Collected</Text>
                                <Text className='text-xs text-blue-400 font-bold'>RM 0.00</Text>
                            </View>
                        </View>
                    </View>
                    <View className='h-14 mt-4 flex-row rounded-xl bg-white border-[0.2px]' style={styles.boxElevated}>
                        <View className='w-[50%] items-center justify-center'>
                            <Text className='font-extrabold'>DRS Update</Text>
                        </View>
                        <View className='w-[50%] items-center justify-center'>
                            <Text className='font-extrabold'>Pickup Update</Text>
                        </View>
                    </View>
                    <View className='h-52 my-4 rounded-xl bg-white border-[0.3px]'>
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
                                            <View className=''>
                                                <Badge className='bg-[#009fd2]'>{route.number}</Badge>
                                            </View>

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
    }
});

export default Dashboard