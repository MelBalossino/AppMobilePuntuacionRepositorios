import React from "react";
import { View, FlatList } from "react-native";
import repositories from "../data/repositories.js";    
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return (
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
            <RepositoryItem {...item}
            />
        )}
        >
        </FlatList>
    );
}

export default RepositoryList;