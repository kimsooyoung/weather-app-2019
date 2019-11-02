import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <Text style={styles.text}> Getting the Weather of </Text>
            <Text style={styles.location}> 잠실 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBF8A4',
        color: '#2c2c2c',
    },
    text: {
        fontSize: 20,
    },
    location: {
        fontSize: 33,
    }
})

export default Loading;