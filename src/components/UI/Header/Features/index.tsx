import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FeatureItem = ({iconName, text}: any) => {
  return (
    <View style={styles.featureContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name={iconName} color={'gray'} size={24} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const Features = () => {
  const featureData = [
    {iconName: 'home-outline', text: 'Bank transfer'},
    {iconName: 'scan-outline', text: 'Scan QR Code'},
    {iconName: 'at-circle-outline', text: 'UPI transfer'},
    {iconName: 'document-text-outline', text: 'View Expenses'},
  ];

  return (
    <View style={{flexDirection: 'row'}}>
      {featureData.map((item, index) => (
        <FeatureItem key={index} iconName={item.iconName} text={item.text} />
      ))}
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  featureContainer: {
    justifyContent: 'space-between',
    marginVertical: 24,
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 6,
    height: 56,
    aspectRatio: 1,
    // width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  textStyle: {
    flexWrap: 'wrap',
    color: 'gray',
    maxWidth: 56,
    textAlign: 'center',
    fontSize: 14,
  },
});
