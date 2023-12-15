import React from 'react';
import Button from '@core/inputs/Button';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import {styles} from './styles';
import UnderlineText from '@core/inputs/Text/UnderlineText';
import FontRegularText from '@core/inputs/Text/FontRegularText';
import {useAppActivation} from '@context/MobileOne/Activation';
import Hud from '@core/inputs/Hud';
import LoginView from '@parts/Login/LoginWebView';
import GradientView from '@core/inputs/View/GradientView';
import {StatusBar, Alert} from 'react-native';
import SvgIcon from '@core/inputs/SvgIcon';
import SAMPLEsmart_logo from '../../../../../assets/SVG/logo/SAMPLEsmart_logo.svg';
import {ImageSelection, appDimentions, mediaImage} from '@utils/constant';
import Image from '@core/inputs/Image';
import Config from 'react-native-config';
const Login = props => {
  const {
    onLoginPress,
    onRegistrationPress,
    handleNavigationData,
    isLoading,
    showLoginPopUp,
    setShowLoginPopUp,
    getUrl,
    onForgotPasswordPress,
    setActivationFormData,
    setActivationSuccessData,
  } = useAppActivation();

  const {t, staticContentData} = useStaticContent();

  const onLoginButtonPress = () => onLoginPress(props);

  const onLandingNavigationPress = () => onRegistrationPress(props);
  
  return (
    <>
      <GradientView
        tabletView={appDimentions.isTablet ? true : false}
        gradientViewStyle={styles.mainContainer}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <SvgIcon
          xml={SAMPLEsmart_logo}
          height={appDimentions.screenHeight * 0.15}
          width={appDimentions.screenHeight * 0.3}
        />
        {/* <FontRegularText style={styles.reguralTextStyle}>{t('ek_start_login_h1')} </FontRegularText> */}
        <HeaderBoldWhiteText
          style={styles.titleText}
          text={t('ek_start_login_h1')}
        />
        <Button
          style={styles.buttonTextStyle}
          gradientViewStyle={styles.gradientViewStyle}
          onPress={onLoginButtonPress}>
          {t('ek_start_login')?.toUpperCase()}
        </Button>
        <Button
          uppercase
          buttonStyle={styles.gradientViewStyle}
          whiteButton
          onPress={onLandingNavigationPress}>
          {t('ek_start_activation')}
        </Button>
        <FontRegularText style={styles.reguralTextStyle}>
          {t('ek_start_text1')}{' '}
        </FontRegularText>
        <UnderlineText
          style={styles.underlineTextStyle}
          onPress={() => {
            props.navigation.replace('users');
          }}>
          {t('ek_start_text2')}
        </UnderlineText>
        {/* <Image
          source={{ uri: "https://www.mobileone.eu/SAMPLE/kombi_XL_300_inactive.png" }}
          style={styles.bottomImage}
          resizeMode={'contain'}
        /> */}

        <Image
          noPlaceholderUrl={true}
          imageURL={
            ImageSelection(staticContentData, mediaImage.ek_app_login_bg)
              .imageUrl
          }
          style={[styles.bottomImage]}
          resizeMode={'cover'}
        />

        <Hud showHud={isLoading} />
        <LoginView
          showPopUp={showLoginPopUp}
          url={getUrl}
          onNavigationChange={data => {
            handleNavigationData(data);
          }}
          onCrossPress={() => {
            setShowLoginPopUp(false);
          }}
        />
        <Hud showHud={false} />
      </GradientView>
    </>
  );
};

export default Login;
