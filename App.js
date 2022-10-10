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

/**다른 페이지 import하기 */
import BottombarPage from './components/BottombarPage';
import Login from './components/Login';
import TobbarPage from './components/TobbarPage';
import CreatAccount from './components/CreatAccount';

import ShopPage from './components/ShopPage';
import MenuPage from './components/MenuPage';
import AnalysisPage from './components/AnalysisPage';
import SettingPage from './components/SettingPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

/**이게 있어야 한 페이지 내에서 여러 페이지를 띄울 수 있음*/
const Stack = createStackNavigator();


export default function App() {
  /**위치 정보를 사용할지에 대해 사용자에게 물어봄 */
  const [city, setCity] = useState([null]);
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    /**여러개의 페이지를 stack으로 불러옴. 이렇게 하면 버튼 및 아이콘을 눌렀을 때 다른 페이지로 이동하기 */
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
        <Stack.Screen name="ShopPage" component={ShopPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
);
}