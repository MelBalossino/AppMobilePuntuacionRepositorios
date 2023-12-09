import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'
import RepositoryItemHeader from './RepositoryItemHeader'

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
    },
});

export default RepositoryItem
