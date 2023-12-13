import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {( {onChangeText, handleChange, handleSubmit, values} ) => {
            return (
                <View>
                    <TextInput 
                    placeholder='Email'
                    values='{values.email}'
                    onChangeText={handleChange('email')}
                    />
                    <TextInput />
                    <TextInput 
                    placeholder='Password'
                    values='{values.password}'
                    onChangeText={handleChange('password')}
                    />
                    <TextInput />
                    <Button onPress={handleSubmit} title='Log In'/>
                </View>
            )
        }}
        </Formik>
    )
}

export default Login