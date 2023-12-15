import React, {useEffect} from 'react';
import View from '@core/inputs/View/View';
import Button from '@core/inputs/Button';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import {styles} from './styles';
import UnderlineText from '@core/inputs/Text/UnderlineText';
import Hud from '@core/inputs/Hud';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAccount} from '@context/MobileOne/AccountSection/Account';
import {Formik} from 'formik';
import {Keyboard, StatusBar} from 'react-native';
import CustomTextInput from '@core/inputs/TextInput';
import ScrollView from '@core/inputs/View/ScrollView';
import Config from 'react-native-config';
import Header from '@parts/Layout/Header';
import LottieLoader from '@core/utiles/Modal/LottieLoader';
import GradientView from '@core/inputs/View/GradientView';
import SwitchWithText from '@core/inputs/SwitchWithText';
import {useDashBoard} from '@context/MobileOne/DashBoard';
import {appDimentions} from '@utils/constant';
import WelcomScreenPopup from '@parts/DashBoard/WelcomScreenPopup';
import {useAppAxios} from '@context/MobileOne/AxiosContext';

const LoginPassword = props => {
  const {
    isLoading,
    secureTextEntryPassword,
    loginCredentialInitialValue,
    validateLoginCredentialSchma,
    // Functions
    onUserPasswordLogin,
    passwordRightIconPress,
    onForgotPasswordPress,
    onSmartLoginClick,
    smartLogin,
    onSmartLoginPress,
    lottieLoader,
    setLottieLoader,
  } = useAccount();

  const {userDataLoad} = useAppAxios();

  const {t} = useStaticContent();

  const {isLoading: isDashboardLoading} = useDashBoard();
  useEffect(() => {
    setLottieLoader(false);
    onSmartLoginClick(props);
  }, []);

  return (
    <GradientView
      tabletView={appDimentions.isTablet ? true : false}
      gradientViewStyle={styles.topMainContainer}>
      <StatusBar
        backgroundColor={Config.STATUS_COLOR}
        barStyle="light-content"
        translucent={false}
      />
      <Header
        title={''}
        previous={true}
        backButtonColor={Config.UNDERLINE_BLUE}
        navigation={props.navigation}
      />
      <ScrollView style={styles.mainContainer}>
        <HeaderBoldWhiteText style={styles.titleText} text={t('ek_login_h1')} />

        <View style={styles.innerContainer}>
          <Formik
            initialValues={loginCredentialInitialValue}
            onSubmit={values => {
              // console.log('values', values);
              Keyboard.dismiss();
              onUserPasswordLogin(props, values);
            }}
            enableReinitialize
            validationSchema={validateLoginCredentialSchma}>
            {({handleSubmit, setFieldValue, touched, values, errors}) => (
              <>
                <View style={styles.innerInputContainer}>
                  <CustomTextInput
                    mode="flat"
                    placeholder={t('ek_login_nr_input')}
                    label={t('ek_login_nr_title')}
                    labelStyle={styles.labelStyle}
                    value={values.username}
                    onChangeText={text => {
                      setFieldValue('username', text);
                    }}
                    isInputSecondryTheme
                    InputStyle={styles.textInputTextstyle}
                    type={'number'}
                    isLastFeild={false}
                    checkForErrorToShow={false}
                    isAutoCapitalise={false}
                    errorMessage={
                      errors.username && touched.username ? errors.username : ''
                    }
                  />
                  <CustomTextInput
                    mode="flat"
                    placeholder={t('ek_login_password_input')}
                    label={t('ek_login_password_title')}
                    labelStyle={styles.labelStyle}
                    value={values.password}
                    onChangeText={text => {
                      setFieldValue('password', text);
                    }}
                    isInputSecondryTheme
                    InputStyle={styles.textInputTextstyle}
                    secureTextEntry={secureTextEntryPassword}
                    rightIcon={
                      !secureTextEntryPassword
                        ? 'eye-outline'
                        : 'eye-off-outline'
                    }
                    isLastFeild={true}
                    isAutoCapitalise={false}
                    rightIconPress={() => {
                      passwordRightIconPress();
                    }}
                    errorMessage={
                      errors.password && touched.password ? errors.password : ''
                    }
                  />
                </View>

                <SwitchWithText
                  text={t('ek_login_smart-login')}
                  onValueChange={() => onSmartLoginPress(props)}
                  containerStyle={styles.switchViewStyle}
                  value={smartLogin}
                />
                <Button buttonStyle={styles.buttonStyle} onPress={handleSubmit}>
                  {t('ek_login_button')}
                </Button>
              </>
            )}
          </Formik>
          <UnderlineText
            style={styles.underlineFooterText}
            onPress={onForgotPasswordPress}>
            {t('ek_login_forgot-password')}
          </UnderlineText>
        </View>
        <Hud showHud={userDataLoad ? false : isLoading || isDashboardLoading} />
        <WelcomScreenPopup />
      </ScrollView>
    </GradientView>
  );
};

export default LoginPassword;
