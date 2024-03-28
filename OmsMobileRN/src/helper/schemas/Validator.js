import * as Yup from 'yup';

const numRegEx= /^((\\+?)|0)?[-0-9]{7,15}$/;



export const checkNumberSchema=Yup.object().shape({
    phone:Yup.string().required('Please Enter Your Number').matches(numRegEx,"Invalid Number")
})

export const checkOtpSchema=Yup.object().shape({
    otp:Yup.string().required('Please Enter a Valid Otp')
})

