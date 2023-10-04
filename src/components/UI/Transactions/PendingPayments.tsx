import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import PendingPaymentCard from '../Cards/PendingPaymentCard';

const PendingPayment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Payment Pending</Text>
      <PendingPaymentCard />
    </View>
  );
};

export default PendingPayment;

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    margin: 16,
    marginTop: 32,
  },
});
