
import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import Login from './Login'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list';
          }
         else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  export default MyTabs;