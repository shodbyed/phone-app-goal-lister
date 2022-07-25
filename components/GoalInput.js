import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Modal,
    Image,
} from 'react-native';
import { useState } from 'react';

export default function GoalInput({ onAddGoal, visible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        enteredGoalText === 'Fuck Emerson'
            ? onAddGoal('Go soft and puke')
            : onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/Images/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={addGoalHandler}
                            title='Add Goal'
                            color='#b180f0'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={onCancel}
                            color='#f31282'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        width: '100%',
        borderWidth: 1,
        padding: 16,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '35%',
        marginHorizontal: 8,
    },
});
