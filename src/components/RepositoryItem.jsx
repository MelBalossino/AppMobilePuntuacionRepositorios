import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={ styles.container }>
            <Text style={ styles.strong }>Name: {props.fullName}</Text>
            <Text>id: {props.id}</Text>
            <Text>Description: {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Stars: {props.stargazersCount}</Text>
            <Text>Forks: {props.forksCount}</Text>
            <Text>Review: {props.reviewCount}</Text>
            <Text>Rating: {props.ratingAverage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});

export default RepositoryItem
