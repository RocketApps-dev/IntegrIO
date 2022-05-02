import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/AuthScreens';

const Stack = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
