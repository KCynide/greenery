import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

import ShopPage from './ShopPage';
import MenuPage from './MenuPage';
import AnalysisPage from './AnalysisPage';
import NewsPage from './NewsPage';
import HomePage from './HomePage';



export default function MainPage() {
  return (
/**네비게이터*/
      <Tab.Navigator
        inactiveColor="white"
        shifting={true}
        labeled={true}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#88b04b',
            color: 'white',
            height: 65,
          },
          tabBarActiveTintColor: '#C7C452',
          tabBarInactiveTintColor: '#363738',
        }}
      >
        <Tab.Screen
          style={styles.tabcontainer}
          name="Home"
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Analysis"
          component={AnalysisPage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="bolt" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Shop"
          component={ShopPage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="tags" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="News"
          component={NewsPage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-o" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Menu"
          component={MenuPage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="ellipsis-v" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88b04b',
  },

});