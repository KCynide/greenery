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
  StatusBar,
} from "react-native";
import city from '../App';

import Icon from 'react-native-vector-icons/FontAwesome';

import SettingPage from './SettingPage';
import { TabActions } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");


function HomePage() {
  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}>
        <View style={styles.city}>
            <Text style={styles.cityName}>{city}</Text>
        </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#88b04b',
    },
    tobtabs: {
      flex: 1,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottomColor: "#fff",
      borderBottomWidth: 1,
    },
    familynumber: {
      flex: 1,
    },
    city: {
      flex: 1,
    },
    cityName: {
      fontSize: 20,
      fontWeight: "500",
    },
    setting: {
      flex: 1,
    }
});

export default HomePage;