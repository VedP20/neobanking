import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="menu-outline" size={28} color="gray" />
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="information-circle-outline" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
});
