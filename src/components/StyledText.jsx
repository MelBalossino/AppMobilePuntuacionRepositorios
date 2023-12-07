import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        color: theme.fontSizes.subheading,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
})

export default function StyledText({ children, color, fontSize, fontWeight, style, ...props }) {
    const textStyle = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
    ]

    return (
        <Text style={textStyle} {...props}>
            {children}
        </Text>
    )
}