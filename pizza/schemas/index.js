import React from 'react'
import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    Title: Yup.string().required("Select your title"),
    Full_Name: Yup.string().min(3).max(20).required("Enter your name"),
    Mobile_Number: Yup.string().min(10).max(10).required("Enter your mobile number"),
    Alternate_Number: Yup.string().min(10).max(10).required("Enter your alternate number"),
    Delivery_Address: Yup.string().min(3).max(40).required("Enter your delivery address"),
    Delivery_Instruction: Yup.string().min(3).max(20).required("Enter your delivery instruction"),
    Nearest_Landmark: Yup.string().min(3).max(20).required("Enter your nearest landmark"),
    Email: Yup.string().email().required("Enter your email"),
})
