import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabNavigation';

const App = () => {
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      warning: 'rgb(199, 199, 204)',
    },
  };
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
