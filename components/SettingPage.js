import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Switch
} from "react-native";
import * as Location from "expo-location";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

function SettingPage({navigation}) {
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
      <View style={styles.title}>
        <TouchableOpacity style={styles.settingicon} onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.titletext}>Settings</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.profilephoto}>
          <Image style={styles.profilephotoimage} source={require("greenery/assets/logo-greenery.png")} />
        </View>
        <View style={styles.profiletext}>
          <View>
            <View style={styles.profiletextnull}>
              <Text></Text>
            </View>
            <Text style={styles.profiletextname}>Bae Junyeol</Text>
          </View>
          <View>
            <Text style={styles.profiletextplus}>{city}</Text>
          </View>
        </View>
      </View>
      <View style={styles.underlineview}>
        <View style={styles.underline1}></View>
      </View>
      <TouchableOpacity>
      <View style={styles.electronics}>
          <Icon5 style = {styles.electronicsicon} name="plug" size={30} color="#000000" />
            <Text style = {styles.electronicstext1}>Manage House Appliances</Text>
          
          <Icon5 style = {styles.toggledown} name="chevron-down" size={20} color="#000000" />
      </View>
      </TouchableOpacity>
      <View style={styles.underlineview}>
        <View style={styles.underline}></View>
      </View>
      <TouchableOpacity>
      <View style={styles.electronics}>
          <Icon5 style = {styles.electronicsicon} name="plug" size={30} color="#000000" />
            <Text style = {styles.electronicstext1}>Manage House Appliances</Text>
          
          <Icon5 style = {styles.toggledown} name="chevron-down" size={20} color="#000000" />
      </View>
      </TouchableOpacity>
      <View style={styles.underlineview}>
        <View style={styles.underline}></View>
      </View>
      <TouchableOpacity>
      <View style={styles.electronics}>
          <Icon5 style = {styles.electronicsicon} name="plug" size={30} color="#000000" />
            <Text style = {styles.electronicstext1}>Manage House Appliances</Text>
          
          <Icon5 style = {styles.toggledown} name="chevron-down" size={20} color="#000000" />
      </View>
      </TouchableOpacity>
      <View style={styles.underlineview}>
        <View style={styles.underline}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88b04b',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  settingicon: {
    paddingRight: 10,
  },
  titletext: {
    fontSize: 20,
  },
  underlineview: {
    width: "100%",
    alignItems: 'center',
  },
  underline1: {
    width: "95%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
    marginTop: 20,
  },
  underline: {
    width: "95%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  profilephotoimage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    marginTop: 20,
  },
  profiletext: {
    marginLeft: 20,
  },
  profiletextname: {
    fontSize: 25,
    marginBottom: 5,
  },
  profiletextnull: {
    height: 15,
  },
  electronics: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  electronicstext1: {
    fontSize: 20,
    marginLeft: 10,
  },
  toggledown: {
    marginLeft: 10,
    marginTop: 5,
  },
});

export default SettingPage;