import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Expenses</Text>
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
