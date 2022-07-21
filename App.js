import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }
    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }
    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        });
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button title='Add New Goal' onPress={startAddGoalHandler} />

                <GoalInput
                    onCancel={endAddGoalHandler}
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                />

                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={itemData => {
                            return (
                                <GoalItem
                                    onDelete={deleteGoalHandler}
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        flex: 4,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
    goalTitle: {
        fontSize: 25,
        marginBottom: 15,
    },
});
