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
import Icon from '@expo/vector-icons/FontAwesome';
import Icon5 from '@expo/vector-icons/FontAwesome5';
/**회원가입 */

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