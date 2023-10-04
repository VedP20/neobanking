jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Mock the module
jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn(() => null),
      Screen: jest.fn(() => null),
    }),
  };
});
