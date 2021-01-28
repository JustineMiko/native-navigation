import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Book" component={BookScreen} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}