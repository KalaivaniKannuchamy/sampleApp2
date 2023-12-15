import React from 'react';
import View from '@core/inputs/View/View';
import Button from '@core/inputs/Button';
import {styles} from './styles';
import Hud from '@core/inputs/Hud';
import CustomTextInput from '@core/inputs/TextInput';
import {Formik} from 'formik';
import {useAccount} from '@context/MobileOne/AccountSection/Account';
import SuccessInfoModal from '@core/utiles/Modal/SuccessInfoModal';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import ScrollView from '@core/inputs/View/ScrollView';
import {appDimentions, isPopUpTheme, onNumberPress} from '@utils/constant';
import Config from 'react-native-config';
import Header from '@parts/Layout/Header';
import FontRegularText from '@core/inputs/Text/FontRegularText';
import GradientView from '@core/inputs/View/GradientView';
import {StatusBar} from 'react-native';
import UnderlineText from '@core/inputs/Text/UnderlineText';
import sms_passwort from '../../../../../assets/SVG/Icons/sms_passwort.svg';
import HTMLText from '@core/inputs/Text/HTMLText';

const ForgotPassword = props => {
  const {
    isLoading,
    successModel,
    forgotPasswordInitialValue,
    validateForgotPasswordSchema,
    onForgotPasswordCall,
    onForgotSuccessPress,
  } = useAccount();

  const {t} = useStaticContent();

  const onUnderlinePress = () => {
    let stringNumber = t('ek_contact_service-number');
    let number = stringNumber.split(' ').join('');
    onNumberPress(number);
  };

  return (
    <GradientView
      tabletView={appDimentions.isTablet ? true : false}
      gradientViewStyle={styles.topMainContainer}>
      <Header
        title={''}
        previous={true}
        backButtonColor={Config.UNDERLINE_BLUE}
        navigation={props.navigation}
      />

      <ScrollView style={styles.mainContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent={true}
        />
        <HeaderBoldWhiteText
          style={styles.titleText}
          text={t('ek_forgot-pw_h1')}
        />

        <Formik
          initialValues={forgotPasswordInitialValue}
          onSubmit={values => {
            onForgotPasswordCall(values);
          }}
          enableReinitialize
          validationSchema={validateForgotPasswordSchema}>
          {({handleSubmit, setFieldValue, touched, values, errors}) => (
            <View>
              <View style={styles.innerContainer}>
                <CustomTextInput
                  mode="flat"
                  placeholder={t('ek_forgot-pw_number_input')}
                  label={t('ek_forgot-pw_number')}
                  labelStyle={styles.labelStyle}
                  value={values.msisdn}
                  onChangeText={text => {
                    setFieldValue('msisdn', text);
                  }}
                  InputStyle={styles.textInputTextstyle}
                  type={'number'}
                  isLastFeild={false}
                  checkForErrorToShow={false}
                  isAutoCapitalise={false}
                  isInputSecondryTheme={true}
                  errorMessage={
                    errors.msisdn && touched.msisdn ? errors.msisdn : ''
                  }
                />
                <CustomTextInput
                  mode="flat"
                  placeholder={t('ek_forgot-pw_puk_input')}
                  label={t('ek_forgot-pw_puk')}
                  labelStyle={styles.labelStyle}
                  value={values.puk}
                  onChangeText={text => {
                    setFieldValue('puk', text);
                  }}
                  InputStyle={styles.textInputTextstyle}
                  type={'number'}
                  isLastFeild={true}
                  isAutoCapitalise={false}
                  isInputSecondryTheme={true}
                  infoIcon={true}
                  helpMessage={t('ek_forgot-pw_text2')}
                  errorMessage={errors.puk && touched.puk ? errors.puk : ''}
                  toolContainerStyle={styles.toolContainerStyle}
                />
              </View>
              <Button buttonStyle={styles.buttonStyle} onPress={handleSubmit}>
                {t('ek_forgot-pw_send_button')}
              </Button>

              {/* Bottom Text View */}
              <FontRegularText
                style={styles.bottomText}
                onPress={onUnderlinePress}>
                {t('ek_forgot-pw_text1')}
              </FontRegularText>
              <HTMLText
                html={t('ek_forgot-pw_text3')}
                baseStyle={styles.underlineText}
              />
              {/* <UnderlineText style={styles.underlineText} onPress={onUnderlinePress}>{t('ek_forgot-pw_text3')} </UnderlineText> */}
            </View>
          )}
        </Formik>

        <SuccessInfoModal
          isSVG={sms_passwort}
          subTitle={t('ek_forgot-pw_success_h1')}
          visible={successModel}
          isThemeLight={isPopUpTheme.LIGHT}
          color={Config.DARK_BLUE}
          onCancelPress={() => {
            onForgotSuccessPress();
          }}
          underlineText={t('ek_forgot-pw_success_back')}
          description={t('ek_forgot-pw_success_text1')}
          subDescription={t('ek_forgot-pw_success_text2')}
          subDescriptionStyle={styles.subDescriptionStyle}
          onBackPress={() => {
            onForgotSuccessPress();
          }}
          buttonStyle={styles.popButtonStyle}
        />

        <Hud showHud={isLoading} />
      </ScrollView>
    </GradientView>
  );
};

export default ForgotPassword;
