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

const { width: SCREEN_WIDTH } = Dimensions.get("window");


function HomePage({ navigation }) {
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
      { useGoogleMaps: false },
    );
    setCity(location[0].region);
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
      <View style={styles.homepagetext}>
        <View style={styles.firstline}>
          <Text style={styles.firstline1}>
            Your Electricity Usage of the Month
          </Text>
          <Text style={styles.colon}> : </Text>
          <Text style={styles.firstline2}>
            290kWh
          </Text>
        </View>
        <View style={styles.secondline}>
          <Text style={styles.secondline1}>
            Average Usage of your Household
          </Text>
          <Text style={styles.colon}> : </Text>
          <Text style={styles.secondline2}>
            190kWh
          </Text>
        </View>
        <View style={styles.thirdline}>
          <Text style={styles.thirdline1}>
            Power generation through self-generation
          </Text>
          <Text style={styles.colon}> : </Text>
          <Text style={styles.thirdline2}>
            10kWh
          </Text>
        </View>
        <View style={styles.fourthline}>
          <Text style={styles.fourthline1}>This month you've planted</Text>
          <Text style={styles.fourthline2}>0.5</Text>
          <Text style={styles.fourthline3}>tree</Text>
        </View>
        <View style={styles.fourthlineplus}>
          <Text style={styles.fourthlineplus1}>You've saved...</Text>
          <Text style={styles.fourthlineplus2}>100</Text>
          <Text style={styles.fourthlineplus3}>kg-CO2</Text>
        </View>
        <View style={styles.underline}></View>
        <TouchableOpacity style={styles.fifthline}>
          <Icon name="angle-right" size={20} color="#000000" />
          <Text style={styles.fifthline1}>Self-Power Recommendation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sixthline} onPress={() => navigation.navigate('ShopPage')}>
          <Icon name="angle-right" size={20} color="#000000" />
          <Text style={styles.fifthline1}>Shop Page</Text>
        </TouchableOpacity>
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
      justifyContent: "center",
      alignItems: "center",
    },
    homepagetext: {
      backgroundColor: "#bdaa46",
      width: "90%",
      height: "90%",
      borderRadius: 25,
      alignItems: "center",
    },
    firstline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: 30,
      paddingLeft: 20,
    },
    firstline1: {
      fontSize: 20,
      width: "60%",
    },
    firstline2: {
      fontSize: 30,
    },
    secondline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 20,
      paddingLeft: 20,
    },
    secondline1: {
      fontSize: 20,
      width: "60%",
    },
    secondline2: {
      fontSize: 30,
    },
    thirdline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 20,
      paddingLeft: 20,
    },
    thirdline1: {
      fontSize: 20,
      width: "60%",
    },
    thirdline2: {
      fontSize: 30,
    },
    fourthline: {
      width: "90%",
      height: "10%",
      flexDirection: "row",
      alignItems: "flex-end",
      paddingTop: 10,
      paddingLeft: 20,
    },
    fourthline1: {
      fontSize: 20,
    },
    fourthline2: {
      fontSize: 30,
      paddingLeft: 10,
    },
    fourthline3: {
      fontSize: 20,
      paddingLeft: 10,
    },
    underline: {
      width: "85%",
      borderBottomColor: "#ffffff",
      borderBottomWidth: 1,
      marginTop: 30,
    },
    fifthline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
      marginLeft: 30,
    },
    fifthline1: {
      fontSize: 15,
      paddingLeft: 10,
    },
    sixthline: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 20,
      marginLeft: 30,
    },
    sixthline1: {
      fontSize: 15,
      paddingLeft: 10,
    },
    colon: {
      fontSize: 30,
    },
});

export default HomePage;