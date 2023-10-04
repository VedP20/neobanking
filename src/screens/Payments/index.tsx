import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Payments = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Payments</Text>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
