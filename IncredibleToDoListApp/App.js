/**
 * My To Do List App
 *
 * @format
 */
"use client";
import React from 'react';
import TodoList from './component/ToDoList.js';
import ToDoForm from './component/ToDoForm.js';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {useState} from 'react';
<StatusBar style="light-content" />
function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    const handleAddTask = (task) => {
      if (!tasks.includes(task)) {
        setTasks([...tasks, task]);} else { alert('Task already exists!');}
      };
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <StatusBar style="auto" />
                <TodoList items={tasks}/>
                <ToDoForm addTask={handleAddTask} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', 
    },
});

export default App;