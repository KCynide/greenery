import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import * as Font from 'expo-font';
import * as Location from "expo-location";
/** import Icon from 'react-native-vector-icons/FontAwesome'; */
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


function ShopPage({ navigation }) {
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
    setCity(location[0].region);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
  <View style={styles.container}>
    <View style={styles.tobtabs}/**상단 바 설정 */>
      <TouchableOpacity style={styles.nullfreunde} onPress={() => navigation.pop()}>
        <Icon name="angle-left" size={30} color="#ffffff" />
      </TouchableOpacity>
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
  
    <View style={styles.shoppage1}>
      <View style={styles.title}/**이전 페이지로 돌아가기 */>
        
      </View>
      <View style={styles.shoppagesetting}>
        <Text style={styles.shoppagetext}>
          Shop
        </Text>
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
    position: 'absolute',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2%',
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
  shoppage1: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  shoppagesetting: {
    backgroundColor: "#a0c16d",
    width: "90%",
    height: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  shoppagetext: {
    fontSize: 20,
  },
});

export default ShopPage;