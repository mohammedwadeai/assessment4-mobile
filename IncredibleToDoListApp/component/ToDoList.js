"use client";
import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet,Array,ArrayList} from 'react-native';
import { useState } from 'react';
function TodoList({items}) { 
    const items_copy = items.map((item) => {
        return ( item );
      });
    return (
<ScrollView>
                {items.length > 0 ? items.map((task, index) => (
                    <Pressable key={index}>
                        <View style={styles.task}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                )) : null}
                <>
                
            </>
</ScrollView>
    );
}
const styles = StyleSheet.create({
    task: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    taskText: {
        fontSize: 18,
    },
    noTasksText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#999',
    },
});

export default TodoList;