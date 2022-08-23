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
        activeColor="red"
        inactiveColor="white"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            activeTintColor: '#fff',
            inactiveTintColor: 'lightgray',
            inactiveBackgroundColor: '#b55031',
            backgroundColor: '#577030',
            color: 'white',
            height: 70,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#93B5C6',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Analysis"
          component={AnalysisPage}
          options={{
            title: '전력분석',
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="bolt" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Shop"
          component={ShopPage}
          options={{
            title: '에코샵',
            tabBarIcon: ({ color, size }) => (
              <Icon name="tags" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="News"
          component={NewsPage}
          options={{
            title: '뉴스',
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-o" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Menu"
          component={MenuPage}
          options={{
            title: '메뉴',
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