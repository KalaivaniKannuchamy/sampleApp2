import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Auth from '@page/Auth';
import Activation from '@page/Activation';
import ChooseTariff from '@page/Activation/ChooseTariff';
import PersonalInfo from '@page/Activation/PersonalInfo';
import PaymentFlow from '@page/Activation/PaymentFlow';
import PaymentActivation from '@page/Activation/PaymentActiviation';
import ValidateSIM from '@page/Activation/ValidateSIM';
import Password from '@page/Activation/Password';
import ActivationLandingPage from '@page/Activation/ActivationLandingPage';
import ActivationPaymentMethod from '@page/Activation/ActivationPaymentMethod';
import PortabilityConfirmation from '@page/Activation/PortabilityConfirmation';
import ActivationOverView from '@page/Activation/ActivationOverView';
import ActivationOverViewConfirmation from '@page/Activation/ActivationOverViewConfirmation';
import ActivationSuccessScreen from '@page/Activation/ActivationSuccessScreen';
import LoginPassword from '@page/Auth/LoginPassword';
import ForgotPassword from '@page/Auth/ForgotPassword';
import InfoForgotPassword from '@page/Auth/InfoForgotPassword';
import Legitimation from '@page/Activation/Legitimation';
import PaymentActivationProduct from '@page/Activation/PaymentActivationProduct';
import EmailVerification from '@page/Activation/EmailVerification';
import CancelActivation from '@page/Activation/EmailVerification/CancelActivation';
import OtpValidation from '@page/Activation/EmailVerification/OtpValidation';
import PortabilityScreen from '@page/Activation/PortabilityScreen';
import Login from '@page/Auth/Login';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        // animationEnabled: true,
        gestureEnabled: false,
        // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        }
      }}
      initialRouteName={'Login'}
    >
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name={'Login'}
        component={Login}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name={'Auth'}
        component={Auth}
      /> */}

      <Stack.Screen
        options={{ headerShown: false }}
        name={'ActivationLandingPage'}
        component={ActivationLandingPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'Login'}
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={'Activation'}
        component={Activation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ValidateSIM'}
        component={ValidateSIM}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'PortabilityScreen'}
        component={PortabilityScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ChooseTariff'}
        component={ChooseTariff}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'EmailVerification'}
        component={EmailVerification}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'PersonalInfo'}
        component={PersonalInfo}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'PaymentFlow'}
        component={PaymentFlow}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Payment'
        }}
        name={'PaymentActivation'}
        component={PaymentActivation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'Password'}
        component={Password}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ActivationPaymentMethod'}
        component={ActivationPaymentMethod}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'PortabilityConfirmation'}
        component={PortabilityConfirmation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ActivationOverView'}
        component={ActivationOverView}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ActivationOverViewConfirmation'}
        component={ActivationOverViewConfirmation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ActivationSuccessScreen'}
        component={ActivationSuccessScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'PaymentActivationProduct'}
        component={PaymentActivationProduct}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'Legitimation'}
        component={Legitimation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'LoginPassword'}
        component={LoginPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'ForgotPassword'}
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'InfoForgotPassword'}
        component={InfoForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={'CancelActivation'}
        component={CancelActivation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={'OtpValidation'}
        component={OtpValidation}
      />


    </Stack.Navigator>
  );
};

export default AuthNavigator;
