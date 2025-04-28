import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionItem from '../components/TransactionItem';
import { TransactionType } from '../types/navigation';

const AccountScreen = () => {
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

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.appIcon}>
        <Image style={styles.imgAppIcon} source={require('../assets/image.png')}/>
      </View>

      <View style={styles.backHeader}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tài khoản của tôi</Text>
          <Text style={styles.totalAmount}>50,000,000 VND</Text>
        </View>

        <View style={styles.balanceContainer}>
          <View style={styles.balanceSection}>
            <View style={styles.balanceHeader}>
              <Text style={styles.balanceTitle}>Thu nhập</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: '#DD0042', width: '60%' }]} />
            </View>
            <Text style={styles.balanceAmount}>+30,000,000 VND</Text>
          </View>

          <View style={styles.balanceSection}>
            <View style={styles.balanceHeader}>
              <Text style={styles.balanceTitle}>Chi tiêu</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: '#46BB1D', width: '20%' }]} />
            </View>
            <Text style={styles.balanceAmount}>-10,000,000 VND</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.transactionsContainer}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
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
  appIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAppIcon: {
    width: 40,
    height: 40,
  },
  backHeader: {
    backgroundColor: '#1E2433',
    borderRadius: 10,
    margin: 15,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  balanceContainer: {
    paddingHorizontal: 20,
  },
  balanceSection: {
    marginBottom: 16,
  },
  balanceHeader: {
    marginBottom: 8,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  balanceAmount: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#242424',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  transactionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default AccountScreen;
