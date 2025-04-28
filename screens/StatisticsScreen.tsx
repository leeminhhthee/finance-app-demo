import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const StatisticsScreen = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  const [periodType, setPeriodType] = useState('monthly');
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
  const [selectedYear, setSelectedYear] = useState('Year');

  const barData = {
    labels: ['1 Jan', '2 Jan', '3 Jan', '10 Jan', '15 Jan', '20 Jan'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const pieData = [
    {
      name: 'Gia đình',
      population: 40,
      color: '#04BFDA',
      legendFontColor: '#FFFFFF',
      legendFontSize: 12,
    },
    {
      name: 'Riêng tôi',
      population: 23,
      color: '#9B88ED',
      legendFontColor: '#FFFFFF',
      legendFontSize: 12,
    },
    {
      name: 'Thú cưng',
      population: 20,
      color: '#FB67CA',
      legendFontColor: '#FFFFFF',
      legendFontSize: 12,
    },
    {
      name: 'Xã giao',
      population: 47,
      color: '#FFA84A',
      legendFontColor: '#FFFFFF',
      legendFontSize: 12,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.appIcon}>
        <Image style={styles.imgAppIcon} source={require('../assets/image.png')}/>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'expenses' && styles.activeTab]}
          onPress={() => setActiveTab('expenses')}
        >
          <Text style={[styles.tabText, activeTab === 'expenses' && styles.activeTabText]}>
            Chi tiêu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'income' && styles.activeTab]}
          onPress={() => setActiveTab('income')}
        >
          <Text style={[styles.tabText, activeTab === 'income' && styles.activeTabText]}>
            Thu nhập
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Thống kê chi tiêu theo tháng</Text>
            <View style={styles.filterContainer}>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Theo thể loại</Text>
                <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.filterTime}>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Monthly</Text>
                  <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Year</Text>
                  <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <BarChart
            data={barData}
            width={screenWidth - 50}
            height={220}
            yAxisLabel=""
            yAxisSuffix="k"
            chartConfig={{
              backgroundColor: '#161B27',
              backgroundGradientFrom: '#161B27',
              backgroundGradientTo: '#161B27',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(4, 191, 218, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              barPercentage: 0.5,
              propsForBackgroundLines: {
                stroke: '#242424',
              },
            }}
            style={styles.chart}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>So sánh các loại chi tiêu</Text>
            <View style={styles.filterContainer}>
              <View/>
              <View style={styles.filterTime}>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Monthly</Text>
                  <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Year</Text>
                  <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.pieChartContainer}>
            <PieChart
              data={pieData}
              width={screenWidth - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#161B27',
                backgroundGradientFrom: '#161B27',
                backgroundGradientTo: '#161B27',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B27',
  },
  appIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAppIcon: {
    width: 40,
    height: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#DD0042',
  },
  tabText: {
    fontSize: 16,
    color: '#848A9C',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  filterTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginRight: 4,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  pieChartContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
});

export default StatisticsScreen;
