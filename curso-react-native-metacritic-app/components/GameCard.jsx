import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated } from "react-native";

export function GameCard({ game }) {
    return (
        <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.description}>{game.description}</Text>
        </View>
    );
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "snow",
        borderRadius: 10,
        margin: 10,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    des: {
        fontSize: 16,
        color: "grey",
        width: "90%",
    },
    score: {
        fontSize: 30,
        fontWeight: "bold",
        color: "green",
    },
});
