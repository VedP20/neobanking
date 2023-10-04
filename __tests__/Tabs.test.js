/**
 * @format
 */

import 'react-native';
import React from 'react';
import Tab from '../src/screens/Home/Tabs/AccountsTab';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', async () => {
  const tree = renderer.create(<Tab />).toJSON();
  expect(tree).toMatchSnapshot();
});
