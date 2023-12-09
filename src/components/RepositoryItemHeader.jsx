import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1 }}>
            <StyledText fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='textSecondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 5,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
});

export default RepositoryItemHeader