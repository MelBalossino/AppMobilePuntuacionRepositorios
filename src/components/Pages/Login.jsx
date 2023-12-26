import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../StyledTextInput'
import StyledText from '../StyledText'
import { loginSchema } from '../../validationSchemas/login'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
        <StyledTextInput 
                    error={meta.error}
                    values='{ field.value}'
                    onChangeText={value => helpers.setValue(value)}
                    {...props}
                    />
        {meta.error && <StyledText style={styles.error}>
            {meta.error}
        </StyledText>}
        </>
    )
}

export default function Login () {
    return (
        <Formik validationSchema={loginSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
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

