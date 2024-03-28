import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import LogoImage from '../../../assets/logo-new.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { checkOtpSchema } from '../../helper/schemas/Validator';
import React from 'react'
import { encode, decode } from 'base-64';
import axios from 'axios';

const EmailVerification = ({ navigation }) => {
    const initialValue = { otp: '',phone:encode('7894227620'),mobileServiceToken: "" }
    console.log(initialValue);
    const url = 'https://7voahk8cma.execute-api.ap-south-1.amazonaws.com/uat/1.0/'
    const verifyOtp=async(data)=>
    {
        try
        {
            const response=await axios.post(url+'ceuser',data,{headers:{'Content-Type':'application/json'}})
            console.log(response.data);
            navigation.navigate('Dashboard');
        }
        catch(error)
        {
            console.log(error)
            Alert.alert('Wrong Otp')
        }
    }

    return (
        <View className='h-[100%] bg-white'>
            <Formik initialValues={initialValue} validationSchema={checkOtpSchema} onSubmit={(values) => { verifyOtp(values),console.log(values) }}>
                {({ handleChange, handleBlur, handleSubmit, errors, values }) =>
                (
                    <View className='h-[100%] bg-white'>
                        <View className='h-[25%] items-center justify-center'>
                            <Image source={LogoImage} resizeMode="contain" />
                        </View>
                        <View className='items-center mb-5'>
                            <Text className='font-bold text-3xl'>Email Verification</Text>
                        </View>
                        <View className='items-center mb-16'>
                            <Text>Please verify your email with the 6 digit OTP sent to</Text>
                            <Text>your mail during registration</Text>
                        </View>
                        <View className='mx-5 mb-2'>
                            <TextInput value={values.otp} onChangeText={handleChange('otp')} className='bg-slate-100 px-5 rounded' />
                        </View>
                        <View className='ml-5 mb-8'>
                            {errors.otp &&
                                <Text style={{ fontSize: 12, color: 'red' }}>{errors.otp}</Text>
                            }
                        </View>
                        <View className='flex-row justify-center mb-5'>
                            <TouchableOpacity className='h-14 w-24 items-center justify-center mr-1 rounded bg-white' style={styles.btnElevated} onPress={() => navigation.navigate('Login')}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='h-14 w-24 items-center justify-center ml-1 rounded bg-blue-600' style={styles.btnElevated} onPress={handleSubmit}>
                                <Text className='text-white'>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row justify-center'>
                            <Text className='mr-5'>Didn't Recived OTP yet?</Text>
                            <TouchableOpacity>
                                <Text>Resend OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    btnElevated: {
        elevation: 4
    }
});

export default EmailVerification

