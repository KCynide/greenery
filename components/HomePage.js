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
import * as Location from "expo-location";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

function HomePage() {
    const [city, setCity] = useState("Loading...");
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
      setCity(location[0].city);
    };
    useEffect(() => {
      ask();
    }, []);
    return (
      <View style={styles.container}>
        <View style={styles.tobtabs}>
          <View style={styles.city}>
            <Text style={styles.cityName}>{city}</Text>
          </View>
        </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
      </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#88b04b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tobtabs: {
      flex: 1,
      
    },
    city: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    cityName: {
        fontSize: 20,
        fontWeight: "500",
    },
});

export default HomePage;