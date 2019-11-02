import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import PropTypes from 'prop-types';

const weatherCase = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        colorGradient: ['#00bf8f', '#001510'],
        title: 'Thunderstorm',
        description: 'This is weather of now'
    },
    Drizzle: {
        iconName: 'weather-hail',
        colorGradient: ['#83a4d4', '#b6fbff'],
        title: 'Drizzle',
        description: 'This is weather of now'
    },
    Rain: {
        iconName: 'weather-rainy',
        colorGradient: ['#00d2ff', '#3a7bd5'],
        title: 'Rain',
        description: 'This is weather of now'
    },
    Snow: {
        iconName: 'weather-snowy',
        colorGradient: ['#43cea2', '#185a9d'],
        title: 'Snow',
        description: 'This is weather of now'
    },
    Atmosphere: {
        iconName: 'weather-fog',
        colorGradient: ['#948E99', '#2E1437'],
        title: 'Atmosphere',
        description: 'This is weather of now'
    },
    Haze: {
        iconName: 'weather-hail',
        colorGradient: ['#00c6ff', '#0072ff'],
        title: 'Haze',
        description: 'This is weather of now'
    },
    Smoke: {
        iconName: 'weather-fog',
        colorGradient: ['#780206', '#061161'],
        title: 'Smoke',
        description: 'This is weather of now'
    },
    Mist: {
        iconName: 'weather-fog',
        colorGradient: ['#F0C27B', '#4B1248'],
        title: 'Mist',
        description: 'This is weather of now'
    },
    Dust: {
        iconName: 'industry',
        colorGradient: ['#9a8478', '#1e130c'],
        title: 'Dust',
        description: 'This is weather of now'
    },
    Fog: {
        iconName: 'weather-fog',
        colorGradient: ['#70e1f5', '#ffd194'],
        title: 'Fog',
        description: 'This is weather of now'
    },
    Sand: {
        iconName: 'timer-sand',
        colorGradient: ['#283048', '#FFE47A'],
        title: 'Sand',
        description: 'This is weather of now'
    },
    Squall: {
        iconName: 'weather-pouring',
        colorGradient: ['#FFE47A', '#283048'],
        title: 'Squall',
        description: 'This is weather of now'
    },
    Tornado: {
        iconName: 'weather-hurricane',
        colorGradient: ['#556270', '#FF6B6B'],
        title: 'Tornado',
        description: 'This is weather of now'
    },
    Clear: {
        iconName: 'weather-sunny',
        colorGradient: ['#D38312', '#A83279'],
        title: 'Clear',
        description: 'This is weather of now'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        colorGradient: ['#780206', '#061161'],
        title: 'Clouds',
        description: 'This is weather of now'
    },
}

const Weather = ({ temp, condition }) => {
    console.log(condition);
    return (
        <LinearGradient
            colors={weatherCase[condition].colorGradient}
            style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherCase[condition].iconName}
                    size={100}
                    color='white'>
                </MaterialCommunityIcons>
                <Text style={styles.temp}> {temp} </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherCase[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherCase[condition].description}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Haze',
        'Smoke',
        'Mist',
        'Dust',
        'Fog',
        'Sand',
        'Squall',
        'Tornado',
        'Clear',
        'Clouds'
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 32,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
})

export default Weather;