import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AccountsTab from '../screens/Home/Tabs/AccountsTab';
import DebitCardsTab from '../screens/Home/Tabs/DebitCardsTab';
import LoanTab from '../screens/Home/Tabs/LoanTab';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar: React.FC<{
  state: any;
  descriptors: any;
  navigation: any;
}> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const tabLabelStyle = {
          ...styles.tabLabel,
          backgroundColor: isFocused ? 'black' : 'transparent',
          color: isFocused ? 'white' : 'gray',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: false,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabContainer}
            key={index}>
            <Text style={tabLabelStyle}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TopTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={{
        swipeEnabled: false,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Account"
        component={AccountsTab}
        options={{tabBarLabel: 'Account'}}
      />
      <Tab.Screen
        name="Debit Cards"
        component={DebitCardsTab}
        options={{tabBarLabel: 'Debit Cards'}}
      />
      <Tab.Screen
        name="Loan"
        component={LoanTab}
        options={{tabBarLabel: 'Loan'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tabContainer: {height: 40, width: 100},

  tabLabel: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'white',
    height: 48,
    fontWeight: '600',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopTabs;
