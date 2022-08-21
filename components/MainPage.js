import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function HomePage({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.push('Detail', {id: 1});
        }}
      />
    </View>
  );
}

function AnalysisPage() {
  return (
    <View>
      <Text>Analysis</Text>
    </View>
  );
}

function ShopPage() {
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
}

function MenuPage() {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
}

function MainPage() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      PageOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisPage}
        options={{
          title: '전력분석',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          title: '에코샾',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuPage}
        options={{
          title: '메뉴',
          tabBarIcon: ({color, size}) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPage;