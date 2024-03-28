import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground, StyleSheet, TextInput,Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import BottomNavigator from '../components/BottomNavigator';



const CreatePu = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [keyboardOffset, setKeyboardOffset] = useState(0);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
        const keyboardHeight = event.endCoordinates.height;
        setKeyboardOffset(keyboardHeight);
      });
  
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardOffset(0);
      });
  
      return () => {
        keyboardDidShowListener.remove();
        // keyboardDidHideListener.remove();
      };
    }, []);
    


    return (
        <SafeAreaView className='h-[100%] flex-1'style={{ marginBottom: -keyboardOffset }}>
            <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                <View className='mx-5 mb-1 mt-3'>
                    <View className='flex-row h-12 pt-2 items-center'>
                        <View className='flex-1'>
                            <Text className='text-white font-extrabold text-lg'>CREATE PU</Text>
                        </View>
                        <View className='items-center'>
                            <Image source={UserIcon}></Image>
                        </View>
                    </View>
                    <ScrollView className='bg-white w-full rounded-lg mt-4 h-full' style={styles.boxElevated} keyboardShouldPersistTaps='always'>
                    <KeyboardAvoidingView>
                        <View className='mx-5 mt-0'>
                            <View className='mt-3'>
                                <Text className='text-base mb-2'>Account Code*</Text>
                                <View>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View className='flex-row justify-between mt-4'>
                                <View className='flex-1 mr-3'>
                                    <Text className='text-base mb-2'>Post Code*</Text>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                                <View className='flex-1 mr-3'>
                                    <Text className='text-base mb-2'>State*</Text>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                                <View className='flex-1'>
                                    <Text className='text-base mb-2'>City*</Text>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View className='flex-row'>
                                <View className='mt-3 mr-3'>
                                    <Text className='text-base mb-2'>Built Unit*</Text>
                                    <TextInput className='h-10 rounded-lg w-24' style={styles.customInput}></TextInput>
                                </View>
                                <View className='mt-3 flex-1'>
                                    <Text className='text-base mb-2'>Address*</Text>
                                    <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                                </View>
                            </View>
                            <View className='flex-row'>
                                <View className='mt-3 mr-3 flex-1'>
                                    <Text className='mb-2 text-base'>Address 2</Text>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                                <View className='mt-3 flex-1'>
                                    <Text className='mb-2 text-base'>Branch Code*</Text>
                                    <AutocompleteDropdown
                                        clearOnFocus={false}
                                        closeOnBlur={true}
                                        closeOnSubmit={false}
                                        initialValue={{ id:'' }}
                                        onSelectItem={setSelectedItem}
                                        inputContainerStyle={styles.inputContainer}
                                        listContainerStyle={styles.listContainer}
                                        dataSet={[
                                            { id: '1', title: 'Alpha' },
                                            { id: '2', title: 'Beta' },
                                            { id: '3', title: 'Gamma' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View className='flex-row'>
                                <View className='mt-3 mr-3 flex-1'>
                                    <Text className='mb-2 text-base'>Route ID</Text>
                                    <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                                </View>
                                <View className='mt-3 flex-1'>
                                    <Text className='mb-2 text-base'>Number Of Packages</Text>
                                    <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                                </View>
                            </View>
                            <View className='mt-3'>
                                <Text className='text-base mb-2'>Pickup Contact Person*</Text>
                                <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                            </View>
                            <View className='mt-3'>
                                <Text className='text-base mb-2'>Contact Number*</Text>
                                <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                            </View>
                            <View className='mt-3'>
                                <Text className='text-base mb-2'>Remarks</Text>
                                <TextInput className=' h-10 rounded-lg' style={styles.customInput}></TextInput>
                            </View>
                            <View className='mt-5 h-48 rounded-lg'>
                                <Button mode='contained'>Submit</Button>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </ImageBackground>
            <BottomNavigator navigation={navigation}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-end',
      },
    boxElevated: {
        elevation: 3
    },
    transParentBG: {
        backgroundColor: 'white',
        opacity: 0.8
    },
    customInput: {
        borderWidth: 0.5,
        borderColor: '#009fd2',
        paddingLeft: 15
    },
    inputContainer: {
        borderWidth: 0.5,
        borderColor: '#009fd2',
        height:40,
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

export default CreatePu