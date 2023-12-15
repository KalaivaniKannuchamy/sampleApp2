/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import ContextManager from '@config/ContextManager';
import AppRoutes from '@config/AppRoutes';
import * as RootNavigation from '@utils/constant';
import SuccessInfoModal from '@core/utiles/Modal/SuccessInfoModal';
import {useAppAxios} from '@context/MobileOne/AxiosContext';
import fail from '../assets/SVG/Icons/fail.svg';

const App = () => {
  const {t} = useStaticContent();

  const {
    errorTitle,
    errorMessage,
    errorButtonTitle,
    errorModalVisible,
    setErrorModalVisible,
    errorAPIEndPoint,
    errorAPIStatus,
  } = useAppAxios();

  useEffect(() => {}, [errorTitle]);
  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <AppRoutes />
      <SuccessInfoModal
        isSVG={fail}
        visible={errorModalVisible}
        isThemeLight={RootNavigation.isPopUpTheme.LIGHT}
        subTitle={errorTitle ? t(errorTitle) : ''}
        underlineText={errorButtonTitle ? t(errorButtonTitle) : ''}
        description={
          errorMessage
            ? t(errorMessage)
                .replace(`\\endPoint`, errorAPIEndPoint || '')
                .replace(`\\status`, errorAPIStatus)
            : ''
        }
        onBackPress={() => {
          setErrorModalVisible(!errorModalVisible);
        }}
      />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <PaperProvider>
      <ContextManager>
        <App />
      </ContextManager>
    </PaperProvider>
  );
};
