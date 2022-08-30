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
import Icon from 'react-native-vector-icons/FontAwesome';

function CreatAccount() {
  return (
    <View style={styles.container}>
      <Text>creataccount</Text>
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

export default CreatAccount;