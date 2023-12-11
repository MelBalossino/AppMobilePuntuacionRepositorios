import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: "row",
    },
    scroll: {
        paddingBottom: 15,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
});

const AppBarTab = ({ active, children, to }) => {
    const textStyles = [styles.text, active && styles.active]
    return (
        <Link to={to} >
            <StyledText fontWeight="bold" style={textStyles}>
                {children}
            </StyledText>
        </Link>
    );
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
            <AppBarTab active to='/'>Repositories</AppBarTab>
            <AppBarTab to='/signin'>Sign in</AppBarTab>
            </ScrollView>
       </View>
    );
}

export default AppBar;