import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TransactionCard from '../Cards/TransactionCard';

const RecentTransactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Recent Transactions</Text>
      <TransactionCard />
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    margin: 16,
  },
});
