import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../constants/Button';
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
  {
    id: '3',
    username: 'John Doe',
    time: '5:15 pm',
    source: 'Chase Bank',
    amount: '+$50',
  },
  {
    id: '4',
    username: 'John Doe',
    time: '5:15 pm',
    source: 'Chase Bank',
    amount: '+$50',
  },
  {
    id: '5',
    username: 'John Doe',
    time: '5:15 pm',
    source: 'Chase Bank',
    amount: '+$50',
  },
  {
    id: '6',
    username: 'John Doe',
    time: '5:15 pm',
    source: 'Chase Bank',
    amount: '+$50',
  },
];

const PendingPaymentCard = ({item}: any) => {
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
      backgroundColor: colors.primary,
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
      color: colors.card,
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
    buttonContainer: {
      alignItems: 'flex-end',
      width: 100,
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
      <View style={styles.buttonContainer}>
        <Button
          title="Send Money"
          variant="Outlined"
          buttonStyle={{width: '80%', height: 36}}
          textStyle={{fontSize: 13}}
        />
      </View>
    </View>
  );
};

const TransactionList = () => {
  return (
    <>
      {dummyData.map(item => (
        <PendingPaymentCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default TransactionList;
