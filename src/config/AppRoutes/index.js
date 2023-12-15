import React from 'react';
import Auth from '@page/Auth';
import Splash from '@page/Auth/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './Auth';
import Login from '@page/Auth/Login';
import ForgotPassword from '@page/Auth/ForgotPassword';

const appRoute = {
  TEST: '/test',
  HOME: '/',
  NOT_FOUND: '/404',
  DEBUG: '/debug',
};
const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        gestureEnabled: false,
      }}
      // initialRouteName={'Splash'}
    >
      <Stack.Screen
        options={{headerShown: false}}
        name={'Splash'}
        component={Splash}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={'Auth'}
        component={AuthNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'ForgotPassword'}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
