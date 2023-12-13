import React from 'react'
import { View, TextInput } from 'react-native'
import { Formik } from 'formik'

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {() => {
            return (
                <View>
                    <TextInput />
                    <TextInput />
                </View>
            )
        }}
        </Formik>
    )
}

export default Login