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

export default function TobbarPage() {
    <View style={styles.container}>
        <View style={styles.tobtabs}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88b04b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});