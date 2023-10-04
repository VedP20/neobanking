import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoanTab = () => {
  return (
    <View style={styles.container}>
      <Text>Loan Tab</Text>
    </View>
  );
};

export default LoanTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
