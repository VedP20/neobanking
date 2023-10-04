import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DebitCardsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Debit Cards Tabs</Text>
    </View>
  );
};

export default DebitCardsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
