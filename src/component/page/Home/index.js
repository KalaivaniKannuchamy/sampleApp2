import View from '@core/inputs/View/View';
import React, {useCallback, useEffect} from 'react';
import {styles} from './styles';
import Hud from '@core/inputs/Hud';
import {useDashBoard} from '@context/MobileOne/DashBoard';
import CustomerHeader from '@parts/DashBoard/CustomerHeader';
import Welcome from '@parts/DashBoard/Welcome';
import CounterTDMView from '@parts/DashBoard/CounterTDMView';
import {useTariff} from '@context/MobileOne/TariffOption/Tariff';
import ScrollView from '@core/inputs/View/ScrollView';
import {useCustomer} from '@context/MobileOne/Customer';
import FontRegularText from '@core/inputs/Text/FontRegularText';
import List from '@core/layout/List';
import BenefitsCell from '@parts/DashBoard/BenefitsCell';
import {
  BackHandler,
  Platform,
  Pressable,
  RefreshControl,
  StatusBar,
} from 'react-native';
import DashboardNewsPopUp from '@parts/DashBoard/DashBoardNewsPopup';
import PrimaryModal from '@core/utiles/Modal/PrimaryModal';
import {useAccount} from '@context/MobileOne/AccountSection/Account';
import GradientView from '@core/inputs/View/GradientView';
import {
  ImageSelection,
  appDimentions,
  dashboardSustainablityData,
  shadowStyle,
  simLockStatus,
} from '@utils/constant';
import {useNews} from '@context/MobileOne/NewsSection';
import {Pagination} from 'react-native-snap-carousel';
import GlassCard from '@core/inputs/View/GlassCard';
import SvgIcon from '@core/inputs/SvgIcon';
import momentan_nicht_verfuegbar from '../../../../assets/SVG/Icons/momentan_nicht_verfuegbar.svg';
import * as GlobalFunctions from '@utils/constant';
import {useTopUp} from '@context/MobileOne/TopUp';
import {useIsFocused} from '@react-navigation/native';
import Image from '@core/inputs/Image';
import {useAppAxios} from '@context/MobileOne/AxiosContext';
import WelcomScreenPopup from '@parts/DashBoard/WelcomScreenPopup';
import Config from 'react-native-config';
import HTMLText from '@core/inputs/Text/HTMLText';

const Home = props => {
  //context
  const {activeTarif, isTariffInProgress} = useTariff();

  const {isUserLoggedIn} = useAuth();
  const {
    isLoading,
    benefitListWithEmployee,
    benefitListWithoutEmployee,
    onCreditPress,
    onBenefitsCellPress,
    onNewsPoupButtonPress,
    showForcePasswordPopup,
    onNavigatePassword,
    hideWelComeScreen,
    handleHideWelcomeScreen,
    onSwipeDownDashBoard,
    dashboardNewsPopUpModel,
    handleNewPopupCloseFlow,
    afterLoginNewsPopupList,
  } = useDashBoard();

  const {domWithProductData} = useMobileOne();

  const {
    onClimateViewRef,
    viewConfigRef,
    onViewableItemsChangedRef,
    climatecurrentIndex,
    onClimateItemHomePress,
    onMiddleDashboardImagePress,
    onDashboardClimateViewRef,
    onViewableDashboardClimateItemsChangedRef,
    dashboardClimateCurrentIndex,
  } = useNews();

  const {t, staticContentData} = useStaticContent();
  const isFocused = useIsFocused();
  const {
    personalData,
    userSimLockStatus,
    isUserInLockProcessStatus,
    userLockProcessStatus,
  } = useCustomer();

  const {ChangeESIM} = useTariff();

  const {autoTopUpQueryList} = useTopUp();
  const {isLoading: isLoginPasswordLoading, callBirthdayBonusStatus} =
    useAccount();

  const {isUseralReadyLogin, userDataLoad} = useAppAxios();
  //States
  const dashboardClimateData = staticContentData?.ek_dashboardTeaserList;

  useEffect(() => {
    // StatusBar.setHidden(true)
  }, [activeTarif]);

  useEffect(() => {
    // handleHideWelcomeScreen()
  }, []);

  useEffect(() => {
    async function fetchMyAPI() {
      await callBirthdayBonusStatus();
    }
    isUserLoggedIn && isUseralReadyLogin ? fetchMyAPI() : null;
  }, [isUseralReadyLogin]);

  useEffect(() => {
    var handler;
    if (isFocused && Platform.OS === 'android') {
      handler = BackHandler.addEventListener(
        'hardwareBackPress',
        navigationToScrren,
      );
    }
    return () => {
      if (isFocused && Platform.OS === 'android') {
        handler.remove();
      }
    };
  }, [isFocused]);

  const navigationToScrren = () => {
    BackHandler.exitApp();
    return true;
  };

  // useEffect(() => {
  //   StatusBar.setHidden(true)
  //   return () => {
  //     StatusBar.setHidden(false)
  //   }
  // }, [isFocused])

  const renderDashboardCell = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          onBenefitsCellPress(item, autoTopUpQueryList);
        }}
        style={[
          {marginLeft: index == 0 ? 37 : 0},
          {marginRight: index == 3 ? 37 : 0},
          {zIndex: 1},
        ]}>
        <BenefitsCell
          item={item}
          index={index}
          onPress={() => {
            onBenefitsCellPress(item, autoTopUpQueryList);
          }}
        />
      </Pressable>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={[
          {paddingRight: item.id == '3' ? 32 : 0},
          {paddingLeft: item.id == '1' ? 32 : 0},
          shadowStyle,
          {paddingBottom: 15},
        ]}
        onPress={() => {
          onClimateItemHomePress(item.id, GlobalFunctions.screenName.Home);
        }}>
        <Image
          style={[styles.carouselImage]}
          imageURL={ImageSelection(staticContentData, item.image).imageUrl}
          resizeMode={'stretch'}
        />
      </Pressable>
    );
  };

  const renderDashboardNewsItem = ({item, index}) => {
    // console.log("item===",item);
    return (
      <Pressable
        onPress={() => {
          onMiddleDashboardImagePress(item);
        }}
        style={{
          ...shadowStyle,
          paddingBottom: 15,
        }}>
        <Image
          imageURL={ImageSelection(staticContentData, item?.image).imageUrl}
          resizeMode="stretch"
          style={[styles.middleViewImage, {marginLeft: index === 0 ? 40 : 0}]}
        />
      </Pressable>
    );
  };

  const lockUnclockView = () => {
    return (
      <GlassCard gradientViewStyle={styles.lockCardView}>
        <FontRegularText style={styles.lockCartTitleText}>
          {t('ek_not_available')?.toUpperCase()}
        </FontRegularText>

        <SvgIcon
          xml={momentan_nicht_verfuegbar}
          width={84}
          height={84}
          style={styles.addIconstyle}
        />
      </GlassCard>
    );
  };

  const dashBoardPopup = useCallback(() => {
    return (
      <DashboardNewsPopUp
        visible={dashboardNewsPopUpModel}
        onUnderlinePress={item => {
          handleNewPopupCloseFlow(item);
        }}
        onButtonPress={item => {
          onNewsPoupButtonPress(item, GlobalFunctions.screenName.Home);
        }}
      />
    );
  }, [dashboardNewsPopUpModel, afterLoginNewsPopupList, domWithProductData]);

  useEffect(() => {}, [dashboardNewsPopUpModel, afterLoginNewsPopupList]);

  return (
    <GradientView
      // requiredSafeArea={true}
      // safeAreaColor={Config.RED}
      tabletView={appDimentions.isTablet ? true : false}
      gradientViewStyle={{
        flex: 1,
        paddingTop: userDataLoad
          ? 0
          : Platform.OS == 'android'
          ? 0
          : appDimentions.statusBarHeight,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Config.STATUS_COLOR}
        translucent={false}
      />
      <>
        <CustomerHeader
          onCreditPress={() => {
            isUserInLockProcessStatus() ? null : onCreditPress(props);
          }}
          gradientViewStyle={[
            styles.gradientViewStyle,
            {
              opacity:
                isUserInLockProcessStatus() || isTariffInProgress ? 0.5 : 1,
            },
          ]}
        />
        <ScrollView
          style={styles.scrollViewStyle}
          bounces={true}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={async () => {
                await callBirthdayBonusStatus();
                await onSwipeDownDashBoard();
              }}
            />
          }>
          {/* Header */}
          {/* Banner for tariffs */}
          <Pressable
            style={styles.pressbannerStyle}
            onPress={() => {
              isUserInLockProcessStatus() || isTariffInProgress
                ? null
                : ChangeESIM(GlobalFunctions.screenName.Home);
            }}>
            <HTMLText
              onPress={() => {
                isUserInLockProcessStatus() || isTariffInProgress
                  ? null
                  : ChangeESIM(GlobalFunctions.screenName.Home);
              }}
              source={{
                html: isUserInLockProcessStatus()
                  ? t(userLockProcessStatus())
                  : isTariffInProgress
                  ? t('ek_dashboard_banner2')
                  : t('ek_dashboard_banner1'),
              }}
              baseStyle={
                isUserInLockProcessStatus()
                  ? userSimLockStatus === simLockStatus.ACTIVATION_INPROGRESS
                    ? styles.bannerYellowStyle
                    : styles.lockBannerViewStyle
                  : isTariffInProgress
                  ? styles.bannerYellowStyle
                  : styles.bannerGreenStyle
              }
            />
          </Pressable>
          {isUserInLockProcessStatus() ? (
            // Lock View
            lockUnclockView()
          ) : (
            // LCounter TDM View for usages
            <CounterTDMView />
          )}
          <FontRegularText style={styles.titleStyle}>
            {t('ek_dashboard_advantages')?.toUpperCase()}
          </FontRegularText>
          {/* <View style={styles.listView}> */}
          <List
            horizontal={true}
            style={styles.listView}
            data={
              personalData?.flags?.employee
                ? benefitListWithEmployee
                : benefitListWithoutEmployee
            }
            keyExtractor={(item, index) => item + index}
            renderItem={renderDashboardCell}
            NoDataComponent={
              <View>
                <FontRegularText style={styles.noDataComponent}>
                  {t('ek_no-data-found')}
                </FontRegularText>
              </View>
            }
          />
          {/* </View> */}
          <FontRegularText style={styles.titleStyle}>
            {t('ek_news_h1')}
          </FontRegularText>
          <View style={styles.flatListViewStyle}>
            <List
              data={dashboardClimateData}
              horizontal={true}
              keyExtractor={(item, index) => item + index}
              renderItem={renderDashboardNewsItem}
              scrollEnabled={true}
              ref={onDashboardClimateViewRef}
              // pagingEnabled={true}
              snapToAlignment={'center'}
              viewabilityConfig={viewConfigRef?.current}
              onViewableItemsChanged={
                onViewableDashboardClimateItemsChangedRef?.current
              }
            />
            <Pagination
              ref={onDashboardClimateViewRef}
              dotsLength={dashboardClimateData.length}
              activeDotIndex={dashboardClimateCurrentIndex}
              containerStyle={styles.pageControllerStyle}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationInactiveDot}
              inactiveDotOpacity={0.8}
              inactiveDotScale={0.8}
            />
          </View>
          <FontRegularText style={styles.titleStyle}>
            {t('ek_news_category3')}
          </FontRegularText>
          <View style={styles.secondFlatListViewStyle}>
            <List
              data={dashboardSustainablityData}
              horizontal={true}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
              scrollEnabled={true}
              ref={onClimateViewRef}
              // pagingEnabled={true}
              snapToAlignment={'center'}
              viewabilityConfig={viewConfigRef?.current}
              onViewableItemsChanged={onViewableItemsChangedRef?.current}
            />
            <Pagination
              ref={onClimateViewRef}
              dotsLength={3}
              activeDotIndex={climatecurrentIndex}
              containerStyle={styles.pageControllerStyle}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationInactiveDot}
              inactiveDotOpacity={0.8}
              inactiveDotScale={0.8}
            />
          </View>

          <Hud
            showHud={userDataLoad ? false : isLoading || isLoginPasswordLoading}
          />
          {dashBoardPopup()}
          <PrimaryModal
            visible={showForcePasswordPopup}
            headerText={t('ek_forgot-pw_new-pw_modal_h1')}
            descriptionText={t('ek_forgot-pw_new-pw_modal_text')}
            buttonText={t('ek_forgot-pw_new-pw_modal_btn')}
            downloadText
            mainContainerStyle={styles.dialogStyle}
            descriptionTextStyle={styles.descriptionTextStyle}
            buttonStyle={styles.buttonStyle}
            headerTextStyle={styles.headerTextStyle}
            onButtonClick={onNavigatePassword}
          />
        </ScrollView>
      </>
      {/*  welcome screen still the data load */}
    </GradientView>
  );
};

export default Home;
