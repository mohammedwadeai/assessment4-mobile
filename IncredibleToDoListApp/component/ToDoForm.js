"use client";
import React from 'react';
import { View, TextInput,  StyleSheet , Text, TouchableOpacity,  } from 'react-native';
import { useState } from 'react';
function ToDoForm({addTask}) {
 const[task, setTask] = useState('');
 const submitTask = () => { if (task.trim()) { addTask(task); setTask('');} else { alert('Please enter a task.');}
};
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(e) => setTask(e)}
                value={task}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
                required
            />
            <TouchableOpacity onPress={submitTask} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20, 
    },
    input: {
        flex: 1,
        height: 40, 
        backgroundColor: '#f9f9f9', 
        borderColor: '#ddd', 
        borderWidth: 1,
        borderRadius: 20, 
        paddingHorizontal: 15,
        marginRight: 10, 
        fontSize: 16, 
    },
    addButton: {
        backgroundColor: '#007bff', 
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    addButtonText: {
        color: '#fff', 
        fontSize: 16, 
    },
});
export default ToDoForm;