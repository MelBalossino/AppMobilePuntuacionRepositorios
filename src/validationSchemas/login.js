import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
    password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .max(16, 'Password must be at most 16 characters')
})
