import React, {useState} from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Geolocation from 'react-native-geolocation-service';

import MainPage from './components/MainPage';
import Login from './components/Login';
import CreatAccount from './components/CreatAccount';

import ShopPage from './components/ShopPage';
import MenuPage from './components/MenuPage';
import AnalysisPage from './components/AnalysisPage';



componentDidMount() {
  if (hasLocationPermission) {
    Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
}




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;