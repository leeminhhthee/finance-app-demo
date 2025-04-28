import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import NewTransactionScreen from '../screens/NewTransactionScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Types
import { MainTabParamList } from '../types/navigation'; 

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="newspaper-outline" size={size} color={color} />;
          } else if (route.name === 'Account') {
            return <Ionicons name="wallet-outline" size={size} color={color} />;
          } else if (route.name === 'NewTransaction') {
            return (
              <View style={styles.addButton}>
                <MaterialCommunityIcons name="plus" size={size} color="#FFFFFF" />
              </View>
            );
          } else if (route.name === 'Statistics') {
            return <Ionicons name="bar-chart-outline" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <Ionicons name="settings-outline" size={size} color={color} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#46BB1D',
        tabBarInactiveTintColor: '#848A9C',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#242424',
          height: 70,
          paddingBottom: 20,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Sổ giao dịch' }} 
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ tabBarLabel: 'Ví tiền' }} 
      />
      <Tab.Screen 
        name="NewTransaction" 
        component={NewTransactionScreen} 
        options={{ tabBarLabel: '' }} 
      />
      <Tab.Screen 
        name="Statistics" 
        component={StatisticsScreen} 
        options={{ tabBarLabel: 'Thống kê' }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ tabBarLabel: 'Cài đặt' }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default MainNavigator;
