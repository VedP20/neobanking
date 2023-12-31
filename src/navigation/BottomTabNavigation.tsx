import * as React from 'react';
import HomeScreen from '../screens/Home';
import Payments from '../screens/Payments';
import Expenses from '../screens/Expenses';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="inbox-full"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
