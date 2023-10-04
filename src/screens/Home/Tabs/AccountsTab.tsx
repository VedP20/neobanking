import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/constants/Button';
import Features from '../../../components/UI/Header/Features';
import RecentTransactions from '../../../components/UI/Transactions/RecentTransactions';
import PendingPayment from '../../../components/UI/Transactions/PendingPayments';
import {useTheme} from '@react-navigation/native';

const AccountsTab = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    cardContainer: {
      width: '100%',
      Height: 200,
      borderRadius: 20,
      padding: 16,
    },
    textBg: {
      backgroundColor: '#ED8386',
      width: '70%',
      padding: 8,
      borderRadius: 8,
    },
    textStyle: {
      color: 'white',
      fontSize: 16,
    },
    idContainer: {
      flexDirection: 'row',
      gap: 8,
      marginVertical: 16,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 24,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInset={{bottom: 20}}
        contentContainerStyle={
          {
            // paddingBottom: 16,
          }
        }
        style={styles.container}>
        <View style={{paddingHorizontal: 16}}>
          <LinearGradient
            colors={['#E94367', '#E93F33', '#EA5033']}
            useAngle={true}
            angle={108}
            angleCenter={{x: 0.5, y: 0.5}}
            style={styles.cardContainer}>
            <View style={styles.textBg}>
              <Text style={styles.textStyle}>Wallet Balance</Text>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: '800', fontSize: 20, marginTop: 4},
                ]}>
                $5600.00
              </Text>
            </View>
            <View style={styles.idContainer}>
              <Text style={[styles.textStyle, {fontSize: 14}]}>
                UPI ID: 21232324232@farmaxis
              </Text>
              <TouchableOpacity>
                <Icon name="copy-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <Button
              title="Add money"
              iconName="chevron-forward-outline"
              iconColor="white"
              variant="Filled"
              buttonStyle={{width: '50%'}}
            />
          </LinearGradient>
        </View>

        <View>
          <Features />
        </View>
        <View>
          <RecentTransactions />
          <PendingPayment />
        </View>
      </ScrollView>
      <View style={styles.floatingButton}>
        <Button
          title={'Scan & Pay'}
          variant="Filled"
          iconName="scan-outline"
          iconColor="white"
          buttonStyle={{width: '40%'}}
        />
      </View>
    </>
  );
};

export default AccountsTab;
