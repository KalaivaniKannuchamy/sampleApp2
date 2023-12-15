import React, { useState, useEffect } from 'react';
import View from '@core/inputs/View/View';
import { Portal, Dialog } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallWhiteRegularText from '@core/inputs/Text/SmallWhiteRegularText';
import { Image, Keyboard, Platform, StatusBar, TouchableOpacity } from 'react-native'
import UnderlineText from '@core/inputs/Text/UnderlineText';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import { appDimentions, isPopUpTheme } from '@utils/constant';
import Config from 'react-native-config';
import Button from '@core/inputs/Button';
import GradientView from '@core/inputs/View/GradientView';
import SvgIcon from '@core/inputs/SvgIcon';
import HTMLText from '@core/inputs/Text/HTMLText';

const SuccessInfoModal = ({
  visible,
  ImagePath,
  IconeName,
  color,
  isThemeLight,
  title,
  titleStyle,
  subDescription,
  onCancelPress,
  description,
  underlineText,
  onBackPress,
  buttomUnderlineClick,
  buttomUnderlineText,
  subDescriptionStyle,
  iconSize,
  isSVG,
  subTitle,
  isSubtitleHtml,
  subTitleStyle,
  isBetweenImage,
  children,
  buttonStyle,
  height,
  width,
  noUpperCase,
  descriptionHtml,
  subDescriptionHtml,
  gradientViewStyle,
  underlineFooterText,
  subDescriptionHtmlStyle
}) => {

  const [showModel, setShowModel] = useState(visible)

  useEffect(() => {
    setShowModel(visible);
    Keyboard.dismiss();
  }, [visible]);

  const lightTheme = isThemeLight == isPopUpTheme.LIGHT

  return (
    <Portal>
      <Dialog visible={showModel} dismissable={false} style={Platform.OS == "ios" ? styles.dialogIosStyle : styles.dialogStyle}>
        {/**/}
        <GradientView
          start={{ x: 0.8, y: 0.8 }}
          end={{ x: 1, y: 0 }}
          //  start={{ x: 0.2, y: 0.3 }}
          //  end={{ x: 0.6, y: 0.5 }}
          gradientViewStyle={[styles.mainContainer, lightTheme ? { backgroundColor: Config.BLUE } : {}]}>
          <View style={styles.topView}>
            {
              !lightTheme &&
              <Icon
                style={styles.cancelIconStyle}
                onPress={onCancelPress}
                size={35}
                color={'white'}
                name="close"
              />
            }


            <View style={styles.secondryView}>
              {title && <HeaderBoldWhiteText style={[styles.headerTitleStyle, titleStyle, lightTheme ? { color: Config.UNDERLINE_BLUE } : {}]} text={title} />}

              {isSVG ?

                <SvgIcon
                  xml={isSVG}
                  height={height || 61}
                  width={width || 47}
                />
                :
                <Icon
                  size={iconSize || 80}
                  color={
                    color ? color : 'white'
                  }
                  name={IconeName ? IconeName : "android-messages"}
                />

              }
              {
                subTitle && isSubtitleHtml ?
                  <HTMLText
                    html={subTitle}
                    baseStyle={styles.subTitleStyle}
                  />
                  :
                  subTitle ?
                    <HeaderBoldWhiteText noUpperCase={noUpperCase} style={[styles.subTitleStyle, subTitleStyle, lightTheme ? { color: Config.UNDERLINE_BLUE } : {}]} text={subTitle} />
                    :
                    null
              }
              {
                isBetweenImage && <SvgIcon
                  xml={isBetweenImage}
                  height={17}
                  width={21}
                />
              }
              <View>
                {
                  descriptionHtml ?
                    <HTMLText
                      html={descriptionHtml}
                      baseStyle={styles.description}
                    />
                    :
                    <SmallWhiteRegularText style={[styles.description, lightTheme ? { color: Config.UNDERLINE_BLUE } : {}]}>{description}</SmallWhiteRegularText>
                }
                {
                  subDescriptionHtml ?
                    <HTMLText
                      html={subDescriptionHtml}
                      baseStyle={subDescriptionHtmlStyle ? subDescriptionHtmlStyle : styles.subDescription}
                    />
                    :
                    <SmallWhiteRegularText style={[styles.subDescription, subDescriptionStyle, lightTheme ? { color: Config.UNDERLINE_BLUE } : {}]}>{subDescription}</SmallWhiteRegularText>}
              </View>
              <View>
                {children}
              </View>
              {
                underlineText ?
                  <Button gradientViewStyle={[styles.gradientViewStyle,gradientViewStyle]} buttonStyle={[styles.buttonStyle, buttonStyle]} style={styles.buttonTextStyle} onPress={onBackPress}>{underlineText}</Button>
                  :
                  null
              }
              {
                buttomUnderlineText &&
                <UnderlineText style={[styles.underlineFooterText,underlineFooterText]} onPress={buttomUnderlineClick}>{buttomUnderlineText}</UnderlineText>
              }
            </View>
          </View>
        </GradientView>
        {/* </View> */}

      </Dialog>
    </Portal>
  )
}
export default SuccessInfoModal;