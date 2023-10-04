import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const dummyData = [
  {
    id: '1',
    username: 'Ved Prakash',
    time: '4:27 pm',
    source: 'Kotak Bank',
    amount: '+$100',
  },
  {
    id: '2',
    username: 'John Doe',
    time: '5:15 pm',
    source: 'Chase Bank',
    amount: '+$50',
  },
];

const TransactionCard = ({item}: any) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: 'white',
      paddingHorizontal: 16,
    },
    image: {
      backgroundColor: 'red',
      height: 48,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 48,
      marginRight: 8,
      marginVertical: 8,
    },
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      color: 'white',
      fontWeight: '500',
      fontSize: 18,
    },
    infoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 4,
    },
    userName: {
      color: colors.text,
      fontSize: 16,
      fontWeight: 'bold',
    },
    userDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    time: {
      fontSize: 14,
      color: 'gray',
    },
    from: {
      fontSize: 14,
      color: 'gray',
    },
    amount: {
      alignItems: 'flex-end',
    },
    amountTextStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.image}>
          <Text style={styles.textStyle}>{item.username.charAt(0)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.userName}>{item.username}</Text>
          <View style={styles.userDetails}>
            <Text style={styles.time}>{item.time},</Text>
            <Text style={styles.from}>from: {item.source}</Text>
          </View>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountTextStyle}>{item.amount}</Text>
      </View>
    </View>
  );
};

const TransactionList = () => {
  return (
    <FlatList
      horizontal={false}
      data={dummyData}
      keyExtractor={item => item.id}
      renderItem={({item}) => <TransactionCard item={item} />}
    />
  );
};

export default TransactionList;
