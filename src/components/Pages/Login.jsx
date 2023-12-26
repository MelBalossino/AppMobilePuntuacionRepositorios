import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../StyledTextInput'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput 
                    values='{ field.value}'
                    onChangeText={value => helpers.setValue(value)}
                    {...props}
                    />
    )
}

export default function Login () {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {( {onChangeText, handleSubmit} ) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue 
                    placeholder='Email'
                    name="email"
                    />
                    <FormikInputValue 
                    placeholder='Password'
                    name="password"
                    secureTextEntry
                    />
                    <Button onPress={handleSubmit} title='Log In'/>
                </View>
            )
        }}
        </Formik>
    )
}

