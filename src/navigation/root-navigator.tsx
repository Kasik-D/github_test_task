import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ROUTES } from '../constants';
import { MainNavigator } from './main-navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.mainNavigator} component={MainNavigator} />
    </Stack.Navigator>
  );
};
