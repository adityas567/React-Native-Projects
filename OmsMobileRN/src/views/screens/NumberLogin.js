import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import LogoImage from '../../../assets/logo-new.png'
import { Button } from 'react-native-paper';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import { checkNumberSchema } from '../../helper/schemas/Validator';
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';


const NumberLogin = ({ navigation }) => {


    const initialValue = { phone: '', mode: 'LOGIN' }

    const url = 'https://7voahk8cma.execute-api.ap-south-1.amazonaws.com/uat/1.0/'
    const apiUrl=''
    const sendEmail=async(response)=>
    {
        let Email = {
            "FromEmail" : "support@lineclearexpress.com",
                      "ToEmail" : response.data.email,
                      "CCEmail" : "",
                      "BCCEmail" : "",
                      "HtmlBody": '<table><tr><td></br>Dear  ' + res.email + ',</td></tr> <tr><td></br> Please use the following OTP to login to the System. This OTP is confidential. For security reasons, Do not share it with anyone.</td></tr><tr> <td></br><h2>' + otp +' </h2></td></tr> <tr><td></br> <h4>Line Clear Support</h4> </td></tr></table>',
                      "Subject" : "Login OTP"
          }
        await axios.post()
    }

    const signIn=async(data)=>
    {
        try
        {
            // sendEmail(data);
            const response=await axios.post(url+'user/otp',data,{headers:{'Content-Type':'application/json'}})
            console.log(response.data);
            navigation.navigate('EmailVerification');
        }
        catch(error)
        {
            console.log(error)
            Alert.alert('Please Enter your Number')
        }
    }

    return (
        <View className="h-[100%] bg-white">
            <Formik initialValues={initialValue} validationSchema={checkNumberSchema} onSubmit={(values) => { signIn(values); console.log(values); }}>
                {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                    <View className='h-[100%]'>
                        <View className='h-[8%] items-end mx-5 mt-5'>
                            <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                <Icon name='close' size={25} />
                            </TouchableOpacity>
                        </View>
                        <View className='h-[60%] justify-center'>
                            <View className='items-center mb-10'>
                                <Image source={LogoImage} resizeMode="contain" />
                            </View>
                            <View>
                                <View className='ml-5 my-5 mt-10'>
                                    <Text>Enter Mobile No. to get OTP</Text>
                                </View>
                                <View style={styles.headerWrapper}>
                                    <TextInput placeholder='Mobile no.' value={values.phone} onChangeText={handleChange('phone')} keyboardType='number-pad' />
                                </View>
                                <View className='ml-5'>
                                    {errors.phone &&
                                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.phone}</Text>
                                    }
                                </View>
                            </View>

                            <View className='my-3 mx-3'>
                                <Button mode="elevated" buttonColor='#009fd2' textColor='white' onPress={handleSubmit}>
                                    <Text className='text-lg font-bold' style={{ fontSize: 16 }}>SIGN IN</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.9,
        marginHorizontal: 20,
        marginBottom: 20
    }
});


export default NumberLogin