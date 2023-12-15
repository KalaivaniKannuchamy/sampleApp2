import List from '@core/layout/List';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';
import styles from './styles';
import View from '@core/inputs/View/View';
import LinearGradient from 'react-native-linear-gradient';
import {useAppActivation} from '@context/MobileOne/Activation';
import {appDimentions} from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';

const Stepper = ({
  onBackPress,
  totalCount,
  currentStep,
  tariffName,
  title,
  titleStyle,
  tariffColor,
}) => {
  const [stepperArr, setStepperArr] = useState([]);
  const [listWidth, setListWidth] = useState(10);

  const {t} = useStaticContent();
  const {tariffSelected} = useAppActivation();

  useEffect(() => {
    let listData = [];
    for (let i = 0; i < totalCount; i++) {
      let elem = {
        id: i + 1,
      };
      if (currentStep > i) {
        elem.selectable = true;
      }
      listData.push(elem);
    }
    setStepperArr(listData);
  }, [listWidth]);

  const renderListData = ({item, index}) => {
    return (
      <>
        <View
          style={[
            styles.stepperStyle,
            {
              backgroundColor: item.selectable
                ? Config.UNDERLINE_BLUE
                : Config.WHITE,
              width:
                listWidth / stepperArr.length -
                (5 * (stepperArr.length - 1)) / stepperArr.length,
              marginRight: stepperArr.length - 1 === index ? 0 : 5,
              marginVertical: 2,
            },
          ]}
        />
      </>
    );
  };

  return (
    <View style={appDimentions.isTablet ? styles.stepperView : null}>
      <LinearGradient
        colors={[Config.BLUE, Config.GRADIENT_GLASS_WHITE]}
        start={{x: 0.9, y: 1}}
        end={{x: 0.4, y: 0.1}}
        style={
          appDimentions.isTablet ? styles.isTabletContainer : styles.container
        }>
        <View style={styles.iconContainerViewStyle}>
          {onBackPress ? (
            <Icon
              onPress={onBackPress}
              size={25}
              color={Config.UNDERLINE_BLUE}
              name="arrow-left"
              style={styles.iconStyle}
            />
          ) : (
            <View style={styles.noIconStyle} />
          )}
          {tariffName && (
            <View style={styles.badgeView}>
              <FontRegularText style={styles.choosetariffStyle}>
                {t('ek_ap_chosen_tariff')}
              </FontRegularText>
              <FontRegularText
                style={[
                  styles.tariffName,
                  {
                    color: tariffColor
                      ? tariffColor
                      : tariffSelected?.additionalInfo?.primaryColor,
                  },
                ]}>
                {tariffName}
              </FontRegularText>
            </View>
          )}
        </View>

        <View style={styles.titleContainerStyle}>
          <FontRegularText style={[styles.titleStyle, titleStyle]}>
            {title?.toUpperCase()}
          </FontRegularText>
          <FontRegularText style={[styles.titleStyle, titleStyle]}>
            {currentStep}/{stepperArr.length}
          </FontRegularText>
        </View>
        <List
          onLayout={event => {
            var {x, y, width, height} = event.nativeEvent.layout;
            setListWidth(width);
          }}
          horizontal
          data={stepperArr}
          keyExtractor={(item, id) => item + id}
          renderItem={renderListData}
        />
      </LinearGradient>
    </View>
  );
};

export default Stepper;
