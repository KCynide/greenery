import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Location from "expo-location";


import BottombarPage from './components/BottombarPage';
import Login from './components/Login';
import TobbarPage from './components/TobbarPage';
import CreatAccount from './components/CreatAccount';

import ShopPage from './components/ShopPage';
import MenuPage from './components/MenuPage';
import AnalysisPage from './components/AnalysisPage';
import SettingPage from './components/SettingPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login} />
        <Stack.Screen name="BottombarPage" component={BottombarPage} />
        <Stack.Screen name="TobbarPage" component={TobbarPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
      </Stack.Navigator>
    </NavigationContainer>
);
}