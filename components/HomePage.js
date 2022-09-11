import React, {useState, useEffect} from 'react';
import * as Location from "expo-location";
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

import Icon from 'react-native-vector-icons/FontAwesome';

import SettingPage from './SettingPage';

const { width: SCREEN_WIDTH } = Dimensions.get("window");


function HomePage({ navigation }) {
  const [city, setCity] = useState("Loading...");
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
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}>
      <View style={styles.nullfreunde} />
      <Text style={styles.nhousehold}>
        1인 가구
      </Text>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => navigation.navigate('SettingPage')}
      >
        <Icon name="gear" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
    <ScrollView contentContainerStyle={styles.homepage1}>
      <View style={styles.homepagesetting}>
        <Text style={styles.homepagetext}>
          Home
        </Text>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#88b04b',
    },
    tobtabs: {
      position: 'absolute',
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomColor: "#fff",
      borderBottomWidth: 1,
    },
    nullfreunde: {
      width: '40%',
    },
    nhousehold: {
      fontSize: 20,
      fontWeight: "500",
    },
    city: {
    },
    cityName: {
      fontSize: 20,
      fontWeight: "500",
    },
    setting: {
      
    },
    homepage1: {
      marginTop: 60,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    homepagesetting: {
      backgroundColor: "#bdaa46",
      width: "90%",
      height: "90%",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center"
    },
    homepagetext: {
      fontSize: 20,
    },
});

export default HomePage;