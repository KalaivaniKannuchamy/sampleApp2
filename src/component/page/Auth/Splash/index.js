import React, {useEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import View from '@core/inputs/View/View';
import {styles} from './styles';
import {
  ImageSelection,
  mediaImage,
  storage,
  storageKeys,
} from '@utils/constant';
import Config from 'react-native-config';
import SvgIcon from '@core/inputs/SvgIcon';
import SAMPLEsmart_logo from '../../../../../assets/SVG/logo/SAMPLEsmart_logo.svg';
import {useAppAxios} from '@context/MobileOne/AxiosContext';

const Splash = props => {
  const navigation = props.navigation;
  const {setUserLogin} = useAuth();
  const {onStaticKeyValuePairCall, onStaticContentCall} = useStaticContent();
  const {setIsUseralReadyLogin, setUserDataFetching} = useAppAxios();

  useEffect(() => {
    StaticContentAPIs();
  }, []);

  const navigateToScreen = async () => {
    let authToken = await storage.encryptedGetItem(appStorage.AUTH_TOKEN);
    let refreshToken = await storage.encryptedGetItem(
      appStorage.AUTH_REFRESH_TOKEN,
    );

    if (authToken && refreshToken) {
      await storage.encryptedSetItem(storageKeys.USER_FIRST_LOGIN, '');
      setUserLogin(true);
      setIsUseralReadyLogin(true);
      setUserDataFetching(true);
      navigation.replace('users');
    } else {
      setUserLogin(false);
      setIsUseralReadyLogin(false);
      setUserDataFetching(false);
      navigation.replace('Auth');
    }
  };

  const StaticContentAPIs = async () => {
    await callStaticKeysValue();
    await callStaticContentKeys();
  };

  // Static content call for key value pair
  const callStaticKeysValue = async () => {
    try {
      const response = await onStaticContentCall({
        platform: 'app',
        lang: 'de',
        client: Config.APPID_CLIENTID,
      });
      var placeholderImage = ImageSelection(
        response.data,
        mediaImage.ek_app_news_fallback_content_1,
      ).imageUrl;
      await storage.encryptedSetItem(
        storageKeys.PLACEHOLDER_IMAGE,
        placeholderImage,
      );

      // console.log("placeholderImage===",placeholderImage);
    } catch (error) {
      setTimeout(() => {
        navigateToScreen();
      }, 500);
    }
  };

  // Static content call for content like URL and tarif data
  const callStaticContentKeys = async () => {
    try {
      const response = await onStaticKeyValuePairCall({
        platform: 'app',
        lang: 'de',
        client: Config.APPID_CLIENTID,
      });
      if (response) {
        await storage.encryptedSetItem(
          storageKeys.KEY_VALUE_PAIR,
          JSON.stringify(response.data.data.app_content),
        );
        setTimeout(() => {
          navigateToScreen();
        }, 500);
      }
    } catch (error) {
      setTimeout(() => {
        navigateToScreen();
      }, 500);
    }
  };

  return (
    <View requiredSafeArea style={styles.mainContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SvgIcon xml={SAMPLEsmart_logo} width={150} height={150} />
    </View>
  );
};

export default Splash;
