/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
//Internal Export
import Clipboard from '@react-native-community/clipboard';
import Button from '@core/inputs/Button';
import LoginView from '@parts/Login/LoginWebView';
import {storage} from '@utils/constant';
import Hud from '@core/inputs/Hud';
import {styles} from './styles';
import Alert from '@core/utiles/Alert';
import FontRegularText from '@core/inputs/Text/FontRegularText';

const Auth = props => {
  const {
    isUserLoggedIn,
    setUserLogin,
    verifyLogin,
    onServerLogin,
    onLogout,
    onTokenExpire,
  } = useAuth();
  const {t} = useStaticContent();

  // const { onCustomerWithProductCall } = useMobileOne();

  const {env} = useAppConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [getUrl, setgetUrl] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [RefreshToken, setRefreshToken] = useState('');
  const [AccessToken, setAccesToken] = useState('');

  // Account
  const [lockStatus, setLockStatus] = useState();

  useEffect(() => {
    //console.log("checkedUserLogin============================>");
    checkedUserLogin();
  }, []);

  // handle login press
  const onloginPress = async () => {
    onServerLogin()
      .then(response => {
        if (response.success === true) {
          setgetUrl(response.data.url);
          setShowPopUp(true);
        }
      })
      .catch(err => {
        Alert.simpLeAlert('onServerLogin', t(err?.error[0]?.messageBody));
        //console.log('err--->', err);
      });
  };

  // handle logout press
  const onLogoutPress = async () => {
    setIsLoading(true);
    let authToken = await storage.encryptedGetItem(appStorage.AUTH_TOKEN);
    let refreshToken = await storage.encryptedGetItem(
      appStorage.AUTH_REFRESH_TOKEN,
    );
    //  //console.log('value=12345==>', refreshToken, authToken)
    onLogout(refreshToken, authToken)
      .then(async response => {
        //console.log('onLogout---success', JSON.stringify(response.data))
        setIsLoading(false);
        // Clear Token
        setAccesToken('');
        setRefreshToken('');
        //  await EncryptedStorage.removeItem(appStorage.AUTH_TOKEN);
        //  await EncryptedStorage.removeItem(appStorage.AUTH_REFRESH_TOKEN);
        setUserLogin(false);
      })
      .catch(err => {
        setIsLoading(false);
        Alert.simpLeAlert('onLogout', t(err?.error[0]?.messageBody));
        //console.log('onLogout---error', err)
      });
  };

  // handle logout press
  const onRefreshPress = async () => {
    setIsLoading(true);
    onTokenExpire()
      .then(value => {
        setIsLoading(false);
        // Clear Token
        //console.log('onRefreshPress result==>', value)
      })
      .catch(err => {
        setIsLoading(false);
        Alert.simpLeAlert('onTokenExpire', t(err?.error[0]?.messageBody));
        //console.log('onRefreshPress error==>', err)
      });
  };

  const onDOMWithProduct = () => {
    setIsLoading(true);
    onCustomerWithProductCall()
      .then(() => {
        setIsLoading(false);
        //console.log("onCustomerWithProductCall-------------------->");
      })
      .catch(err => {
        setIsLoading(false);
        Alert.simpLeAlert(
          'onCustomerWithProductCall',
          t(err?.error[0]?.messageBody),
        );
        //console.log('onCustomerWithProductCall error==>', err)
      });
  };

  // CallToken API
  const callTokenAPI = async code => {
    setIsLoading(true);

    var codeVerifier = await storage.getItem(appStorage.AUTH_CODE_VERIFIER);
    verifyLogin(code, codeVerifier)
      .then(response => {
        setIsLoading(false);
        //console.log('result----', response);
        if (response && response.data.access_token) {
          setUserLogin(true);

          setAccesToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token);
          // onDOMWithProduct()
          props.navigation.replace('users');
        }
      })
      .catch(err => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        Alert.simpLeAlert('verifyLogin', t(err?.error[0]?.messageBody));
        //  if (err.status == 400) { 015147969784
        //    Alert.alert(`Error Code: ${err.status}`, `Something went worng`)
        //  }
      });
  };

  //Setting Local Acces Token
  const handleToken = async (authToken, refreshToken) => {
    setAccesToken(authToken);
    setRefreshToken(refreshToken);
  };

  //Foir checking user is logged in or not
  const checkedUserLogin = async () => {
    let authToken = await storage.encryptedGetItem(appStorage.AUTH_TOKEN);
    let refreshToken = await storage.encryptedGetItem(
      appStorage.AUTH_REFRESH_TOKEN,
    );
    if (authToken && refreshToken) {
      //console.log("If---->");
      setUserLogin(true);
    } else {
      //console.log("else---->");
      setUserLogin(false);
    }
    handleToken(authToken, refreshToken);
  };

  // Handle webView Data
  const handleNavigationData = data => {
    if (data.url.indexOf('session_state') > -1) {
      setShowPopUp(false);
      let cropedData = data.url.split('session_state=')[1].split('&code=');
      let sessionState = cropedData[0];
      let code = cropedData[1];
      callTokenAPI(code);
    }
  };

  const OnActivationPress = () => {
    props.navigation.navigate('ValidateSIM');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {!isUserLoggedIn && (
        <>
          <FontRegularText style={styles.headerText}>
            Hello User
          </FontRegularText>
          <FontRegularText style={styles.subTitleText}>
            Welcome to Whiltelabel World
          </FontRegularText>
          <FontRegularText style={styles.subDesText}>
            Click on Login to authenticate User
          </FontRegularText>
          <Button onPress={onloginPress}>Login</Button>
          <Button onPress={OnActivationPress}>Activation</Button>
        </>
      )}
      {isUserLoggedIn && (
        <>
          <View>
            <FontRegularText style={styles.headerText}>
              Hello User
            </FontRegularText>
            <FontRegularText
              onPress={async () => {
                await storage
                  .encryptedGetItem(appStorage.AUTH_TOKEN)
                  .then(value => {
                    Clipboard.setString(value);
                    alert('Token copy succesfully');
                  });
              }}
              numberOfLines={1}
              style={styles.textstyle}>
              accessToken: {AccessToken}
            </FontRegularText>
            <FontRegularText numberOfLines={1} style={styles.textstyle}>
              You have entered in SAMPLE world
            </FontRegularText>
          </View>
          <Button
            onPress={async () => {
              await storage
                .encryptedGetItem(appStorage.AUTH_TOKEN)
                .then(value => {
                  Clipboard.setString(value);
                  alert('Token copy succesfully');
                });
            }}>
            {'click here to copy token'}
          </Button>
          <Button onPress={onLogoutPress}>Log-out</Button>
          {/* <Button
                        onPress={onAccountPress}
                    >
                        Account
                    </Button>
                    <Button
                        onPress={onTopUpPress}
                    >
                        TopUp
                    </Button> */}
        </>
      )}
      <Hud showHud={isLoading} />
      <LoginView
        showPopUp={showPopUp}
        url={getUrl}
        onNavigationChange={data => {
          handleNavigationData(data);
        }}
        onCrossPress={() => {
          setShowPopUp(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Auth;
