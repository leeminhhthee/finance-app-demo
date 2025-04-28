import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

type MenuItem = {
  id: string;
  title: string;
  icon: string;
  color: string;
  badge?: number;
};

const SettingsScreen = () => {
  const menuItems: MenuItem[] = [
    {
      id: 'language',
      title: 'Ngôn ngữ',
      icon: 'language',
      color: '#007AFF',
    },
    {
      id: 'categories',
      title: 'Quản lý thể loại',
      icon: 'list',
      color: '#9B88ED',
    },
    {
      id: 'theme',
      title: 'Giao diện hệ thống',
      icon: 'color-palette',
      color: '#FB67CA',
    },
    {
      id: 'friends',
      title: 'Bạn bè',
      icon: 'people',
      color: '#FFA84A',
    },
    {
      id: 'account',
      title: 'Tài khoản',
      icon: 'person',
      color: '#46BB1D',
    },
    {
      id: 'notifications',
      title: 'Thông báo',
      icon: 'notifications',
      color: '#DD0042',
      badge: 1,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.content}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon} size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
            </View>
            <View style={styles.menuItemRight}>
              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B27',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#000000',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#DD0042',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
