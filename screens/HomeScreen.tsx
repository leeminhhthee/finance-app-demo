import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TransactionItem from '../components/TransactionItem';
import { TransactionType } from '../types/navigation';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(221, 0, 66, ${opacity})`, // Pink line
        strokeWidth: 2,
      },
      {
        data: [30, 60, 70, 50, 90, 100],
        color: (opacity = 1) => `rgba(70, 187, 29, ${opacity})`, // Green line
        strokeWidth: 2,
      },
    ],
    legend: ['Thu nhập', 'Chi tiêu'],
  };

  // Sample transaction data
  const transactions: TransactionType[] = [
    {
      id: '1',
      type: 'expense',
      category: 'Ăn uống',
      amount: 100000,
      date: '17/04/2025',
      description: 'Riêng tôi',
      wallet: 'Ví của tôi',
      color: '#F3AA60',
    },
    {
      id: '2',
      type: 'income',
      category: 'Du lịch',
      amount: 5000000,
      date: '17/04/2025',
      description: 'Gia đình',
      wallet: 'Ví của tôi',
      color: '#46BB1D',
    },
    {
      id: '3',
      type: 'income',
      category: 'Tiền lương',
      amount: 30000000,
      date: '16/04/2025',
      description: 'Riêng tôi',
      wallet: 'Ví của tôi',
      color: '#04BFDA',
    },
    {
      id: '4',
      type: 'expense',
      category: 'Chữa bệnh',
      amount: 500000,
      date: '16/04/2025',
      description: 'Thú cưng',
      wallet: 'Ví của tôi',
      color: '#FFA84A',
    },
    {
      id: '5',
      type: 'expense',
      category: 'Di chuyển',
      amount: 20000,
      date: '15/04/2025',
      description: 'Riêng tôi',
      wallet: 'Ví của tôi',
      color: '#04BFDA',
    },
    {
      id: '6',
      type: 'expense',
      category: 'Hóa đơn nước',
      amount: 300000,
      date: '15/04/2025',
      description: 'Riêng tôi',
      wallet: 'Ví của tôi',
      color: '#9B88ED',
    },
  ];

  // Group transactions by date
  const groupedTransactions = transactions.reduce((groups: Record<string, TransactionType[]>, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  // Get day name from date
  const getDayName = (date: string) => {
    switch (date) {
      case '17/04/2025':
        return 'Thứ năm';
      case '16/04/2025':
        return 'Thứ tư';
      case '15/04/2025':
        return 'Thứ ba';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.appIcon}>
        <Image style={styles.imgAppIcon} source={require('../assets/image.png')}/>
      </View>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
          <View>
            <Text style={styles.greeting}>Hi,</Text>
            <Text style={styles.userName}>Phú Giáp</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={24} color="#DD0042" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.chartContainer}>
          
          <LineChart
            data={chartData}
            width={screenWidth - 70}
            height={180}
            chartConfig={{
              backgroundColor: '#161B27',
              backgroundGradientFrom: '#161B27',
              backgroundGradientTo: '#161B27',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
              },
              propsForBackgroundLines: {
                stroke: '#242424',
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.transactionsContainer}>
          {Object.keys(groupedTransactions).map((date) => (
            <View key={date}>
              <View style={styles.dateHeader}>
                <Text style={styles.dateText}>{date}</Text>
                <Text style={styles.dayName}>{getDayName(date)}</Text>
              </View>

              {groupedTransactions[date].map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </View>
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  appIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAppIcon: {
    width: 40,
    height: 40,
  },
  appIconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: '#F3AA60',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 12,
    color: '#848A9C',
  },
  userName: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  notificationIcon: {
    marginLeft: 12,
  },
  scrollView: {
    flex: 1,
  },
  chartContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#1E2433',
    borderRadius: 12,
    padding: 16,
  },
  chartHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chartTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  activeChartTab: {
    backgroundColor: '#DD0042',
  },
  chartTabText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  chart: {
    borderRadius: 9,
  },
  transactionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  dateHeader: {
    height: 30,
    alignItems: 'center',
    backgroundColor: '#1E2433',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
    paddingStart: 5,
    paddingEnd: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  dayName: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
