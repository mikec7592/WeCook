import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Test = () => {
    return(
        <Text style={styles.text}>You rendered the test component</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontSize: 22
    },
    background: {
        backgroundColor: 'blue'
    }
})

export default Test;