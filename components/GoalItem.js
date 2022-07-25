import { View, Text, StyleSheet, Pressable } from 'react-native';
export default function GoalItem({ text, onDelete, id }) {
    return (
        <View style={styles.goalItems}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={onDelete.bind(this, id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItems: {
        fontSize: 20,
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
});
