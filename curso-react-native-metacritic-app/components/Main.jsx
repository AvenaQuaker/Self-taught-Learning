import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { AnimatedGameCard, GameCard } from "./GameCard.jsx";
import Constants from "expo-constants";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { Logo } from "./Logo.jsx";

export function Main() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Logo />
            {games.length === 0 ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => (
                        <AnimatedGameCard game={item} index={index} />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        paddingTop: Constants.statusBarHeight,
    },
});
