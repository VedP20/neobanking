import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/UI/Header';
import TopTabs from '../../navigation/TopTabNavigation';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TopTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
