import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";    

const RepositoryList = () => {
    return (
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
            <View key={item.id} style= {{ padding: 20, paddingBottom: 5, paddingTop: 5}}>
                <Text style={{ fontWeight:'bold', marginBottom: 5 }}>Name: {item.fullName}</Text>
                <Text>id: {item.id}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Language: {item.language}</Text>
                <Text>Stars: {item.stargazersCount}</Text>
                <Text>Forks: {item.forksCount}</Text>
                <Text>Review: {item.reviewCount}</Text>
                <Text>Rating: {item.ratingAverage}</Text>
            </View>
        )}
        >
        </FlatList>
    );
}

export default RepositoryList;