import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    error: {
        borderColor: "#d73a4a",
    },
});

const StyledTextInput = ({ style = {}, error, ...props }) => {
    const inputStyle = [
        style,
        styles.textInput,
        error && styles.error
    ];
    return <TextInput style={inputStyle} {...props} />;
}

export default StyledTextInput;