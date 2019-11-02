import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import { AuthSession } from 'expo';
import axios from 'axios';

import Loading from './Loading';
import Weather from './Weather';

const API_KEY = 'cd177c6f265e586ca27c21cdb3a62856';
// http://api.openweathermap.org/data/2.5/weather?lat=37.5634972&lon=127.0366956&APPID=cd177c6f265e586ca27c21cdb3a62856

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState('Clear');

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    setTemp(temp);
    setCondition(weather[0].main);
    setIsLoading(false);
  }
  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Loading></Loading> : <Weather temp={temp} condition={condition}></Weather>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blueView: {
    flex: 3,
    backgroundColor: 'blue',
  }
});


export default App;