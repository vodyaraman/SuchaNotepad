import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const List = ({ items, onToggleComplete, styles }) => {
    return (
        <View>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <TouchableOpacity onPress={() => onToggleComplete(index)}>
                        <Text style={[styles.itemText, item.completed && styles.completed]}>
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

export default List;

