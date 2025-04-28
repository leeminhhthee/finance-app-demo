import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionType } from '../types/navigation';

type TransactionItemProps = {
  transaction: TransactionType;
  showDate?: boolean;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ 
  transaction, 
  showDate = false 
}) => {
  const { type, category, amount, description, wallet, color } = transaction;
  const isIncome = type === 'income';
  const amountText = isIncome 
    ? `+${amount.toLocaleString()} đ` 
    : `-${amount.toLocaleString()} đ`;
  const amountColor = isIncome ? '#46BB1D' : '#DD0042';

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Text style={styles.iconText}>{category.charAt(0)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.description}>{description || wallet}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.amount, { color: amountColor }]}>{amountText}</Text>
        <Text style={styles.wallet}>{wallet}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#848A9C',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  wallet: {
    fontSize: 14,
    color: '#848A9C',
  },
});

export default TransactionItem;
