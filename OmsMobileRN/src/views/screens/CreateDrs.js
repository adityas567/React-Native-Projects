import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Formik,useFormikContext,useFormik } from 'formik';
import * as Yup from 'yup';

import BgImage from '../../../assets/loggedin-bg.png'
import UserIcon from '../../../assets/user.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import { Button, RadioButton } from 'react-native-paper';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

const steps = [
    { label: 'Veichle', field: 'personalDetails' },
    { label: 'Depart', field: 'contactDetails' },
    { label: 'Scan', field: 'confirmation' },
];

const icons = ["truck", "truck-delivery", "scan-helper"];

const customStyles = {
    stepIndicatorSize: 40,
    currentStepIndicatorSize: 50,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 4,
    stepStrokeCurrentColor: '#abdbe3',
    stepStrokeWidth: 5,
    stepStrokeFinishedColor: '#abdbe3',
    stepStrokeUnFinishedColor: '#abdbe3',
    separatorFinishedColor: '#009fd2',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#abdbe3',
    stepIndicatorUnFinishedColor: '#abdbe3',
    stepIndicatorCurrentColor: '#009fd2',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#009fd2'
}

const CreateDrs = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [value, setValue] = useState(true);

    const initialValues = {
        veichleNumber: {

        },
        contactDetails: {
            email: '',
            phoneNumber: '',
        },
    };

    const setSelectedItem = (item) => {
        initialValues.veichleNumber = item
        // console.log('value',formikValues)
    }

    

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (values) => {
         console.log('Form Values:', values);
         console.log(values.veichleNumber)
         console.log(values.contactDetails.email)
         console.log(values.veichleNumber.title)
    };

    const renderStepContent = (values, handleChange,handleSubmit, errors) => {
        // console.log(values.veichleNumber.title);
        switch (currentStep) {
            case 0:
                return (
                    // <View>
                    //     <TextInput
                    //         placeholder="First Name"
                    //         value={values.personalDetails.firstName}
                    //         onChangeText={handleChange('personalDetails.firstName')}
                    //     />
                    //     {errors.personalDetails?.firstName && <Text>{errors.personalDetails.firstName}</Text>}
                    //     <TextInput
                    //         placeholder="Last Name"
                    //         value={values.personalDetails.lastName}
                    //         onChangeText={handleChange('personalDetails.lastName')}
                    //     />
                    //     {errors.personalDetails?.lastName && <Text>{errors.personalDetails.lastName}</Text>}
                    // </View>
                        <View className='h-[80%]'>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <View className='flex-row mt-3 mx-3'>
                                <View className='flex-row items-center mr-2'>
                                    <RadioButton value={true} status='checked' color='#009fd2' />
                                    <Text className='text-[#009fd2] mx-1' style={styles.customFont}>DRS for Customers</Text>
                                </View>
                                <View className='flex-row items-center'>
                                    <RadioButton value={false} color='#009fd2' />
                                    <Text className='text-[#009fd2] mx-1' style={styles.customFont}>DRS for Station</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                        <View className='mx-5'>
                            <Text className='my-1'>Drs Date & Time</Text>
                            <Text className='font-extrabold mb-3'>18/04/2023 12:47:00</Text>
                        </View>
                        <View className='ml-5 mr-3'>
                            <Text className='mb-2'>Veichle Number</Text>
                            <AutocompleteDropdown
                                clearOnFocus={false}
                                closeOnBlur={true}
                                closeOnSubmit={false}
                                initialValue={{ id: '' }}
                                onSelectItem={(item) => setSelectedItem(item)}
                                onChangeText={handleChange('veichleNumber')}
                                value={values.veichleNumber}
                                inputContainerStyle={styles.inputContainer}
                                listContainerStyle={styles.listContainer}
                                dataSet={[
                                    { id: '1', title: 'Alpha' },
                                    { id: '2', title: 'Beta' },
                                    { id: '3', title: 'Gamma' },
                                ]}
                            />
                        </View>
                        <View className='flex-row justify-end mr-3 mt-10'>
                            <TouchableOpacity className='w-[30%] rounded h-10 bg-blue-500 justify-center items-center'
                                onPress={handleNextStep}>
                                <Text className='text-white font-bold'>
                                    Next
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                );
            case 1:
                return (
                    <View className='h-[80%]'>
                        <TextInput
                            placeholder="Email"
                            value={values.contactDetails.email}
                            onChangeText={handleChange('contactDetails.email')}
                        />
                        {/* {errors.contactDetails?.email && <Text>{errors.contactDetails.email}</Text>} */}
                        <TextInput
                            placeholder="Phone Number"
                            value={values.contactDetails.phoneNumber}
                            onChangeText={handleChange('contactDetails.phoneNumber')}
                        />
                        {/* {errors.contactDetails?.phoneNumber && <Text>{errors.contactDetails.phoneNumber}</Text>} */}
                        <View className='flex-row justify-end'>
                            <TouchableOpacity className='w-[40%] rounded h-10 bg-blue-500 justify-center items-center'
                                onPress={handleNextStep}>
                                <Text className='text-white font-bold'>
                                    Next
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='w-[40%] rounded h-10 bg-blue-500 justify-center items-center'
                                onPress={handlePreviousStep}>
                                <Text className='text-white font-bold'>
                                    Previous
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                );
            case 2:
                return (
                <View className='h-[87%]'>
                    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} className='px-2' >
                        <View className='mt-5 h-28 justify-between font-bold'>
                            <Text className='text-base font-bold'>Total Weight: </Text>
                            <Text className='font-bold'>Amount to be Collected:</Text>
                            <Text className='font-bold'>Total waybill Scanned:</Text>
                        </View>
                        <View className='h-44 mt-5 bg-black'>

                        </View>
                        <View className='flex-row mt-5 mb-2'>
                            <View className='absolute justify-center mt-2 ml-2 items-center'>
                                <Icon name="scan-helper" size={20} color='#009fd2' />
                            </View>
                            <TextInput className='border-[0.5px] border-[#009fd2] flex-1 pl-10 h-10 rounded' />
                            <TouchableOpacity className='w-[25%] justify-center items-center bg-[#009fd2] ml-2 rounded'>
                                <Text className='text-white'>Scan</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='border-t-[1px] border-t-red-100 mt-5 h-72'>
                            <View className='mt-5'>
                            <Text className='text-lg font-extrabold'>Scanned Waybill</Text>
                            <ScrollView className='mt-2'>
                                {/* {values.veichleNumber} */}
                            </ScrollView>
                            </View>
                        </View>
                        <TouchableOpacity className='mb-3 rounded h-10 bg-blue-500 justify-center items-center'
                                onPress={handleSubmit}>
                                <Text className='text-white font-bold'>
                                    Create DRS
                                </Text>
                            </TouchableOpacity>
                    </ScrollView>
                    </View>

                );
            default:
                return null;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, handleSubmit, errors }) => (
                <SafeAreaView className='h-[100%] flex-1'>
                    <ImageBackground source={BgImage} resizeMode={'cover'} className='h-[100%]'>
                        <View className='mx-5 mb-1'>
                            <View className='flex-row h-12 pt-2 items-center'>
                                <TouchableOpacity className='' onPress={() => navigation.navigate('Home')}>
                                    <Icons name="arrowleft" size={30} color='white' />
                                </TouchableOpacity>
                                <View className='flex-1 items-center'>
                                    <Text className='text-white font-extrabold text-lg'>Create DRS</Text>
                                </View>
                                <View className='items-center'>
                                    <Image source={UserIcon} />
                                </View>
                            </View>
                        </View>
                        <View className='mt-2 mx-5 px-2 pt-5 rounded-lg bg-white' style={styles.boxElevated}>
                            <StepIndicator
                                customStyles={customStyles}
                                stepCount={3}
                                stepStrokeFinishedColor='#009fd2'
                                currentPosition={currentStep}
                                labels={steps.map((step) => step.label)}
                                renderStepIndicator={({ position, stepstatus }) => (<Icon name={icons[position]} size={20} color='white' />)}
                            />
                            {renderStepContent(values, handleChange,handleSubmit, errors)}
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            )}
        </Formik>
    );
};

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
        fontSize: 15
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

export default CreateDrs;
