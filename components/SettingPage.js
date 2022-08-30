import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function SettingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name="angle-left" size={30} color="#ffffff" />
      </TouchableOpacity>
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
});

export default SettingPage;