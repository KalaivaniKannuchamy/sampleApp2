import React from 'react';
import View from '@core/inputs/View/View';
import styles from './styles';
import UnderlineText from '@core/inputs/Text/UnderlineText';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import Button from '@core/inputs/Button';
import RenderHTML from 'react-native-render-html';
import { appDimentions } from '@utils/constant';
import GlassCard from '../GlassCard';
import FontRegularText from '@core/inputs/Text/FontRegularText';
import HTMLText from '@core/inputs/Text/HTMLText';

const OverlayView = ({
  title,
  titleStyle,
  description,
  buttonText,
  onButtonPress,
  buttonUnderlineClick,
  buttonUnderlineText,
  containerStyle,
  childrenStyle,
  buttonStyle,
  gradientViewStyle,
  subDiscription,
  subDiscriptionStyle,
  underlineFooterTextStyle,
  boldDescription,
  boldDescriptionStyle,
  colors,
  titleNoUpperCase,
  descriptionStyle,
  isHtml,
  children,
}) => {


  return (
    <GlassCard
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={colors}
      gradientViewStyle={[styles.mainContainer, containerStyle]}>
      {title && <HeaderBoldWhiteText noUpperCase={titleNoUpperCase} style={[styles.headerTitleStyle, titleStyle]} text={title} />}

      <HTMLText
        html={description}
        baseStyle={descriptionStyle ? styles.htmldescriptionTextStyle : styles.htmlTextStyle}
      />
      {subDiscription ?
        isHtml ?
          <HTMLText
            html={subDiscription}
            baseStyle={isHtml ? styles.subDiscriptionStyle : styles.htmlTextStyle}
          />
          :
          <FontRegularText style={[styles.htmlTextStyle, subDiscriptionStyle]}>{subDiscription}</FontRegularText> : null}
      {boldDescription ? <FontRegularText style={[styles.htmlTextStyle, boldDescriptionStyle]}>{boldDescription}</FontRegularText> : null}
      {buttonText ? <Button buttonStyle={[styles.buttonStyle, buttonStyle]} gradientViewStyle={gradientViewStyle} onPress={onButtonPress}>{buttonText}</Button> : null}
      {
        buttonUnderlineText &&
        <UnderlineText style={[styles.underlineFooterText, underlineFooterTextStyle]} onPress={buttonUnderlineClick}>{buttonUnderlineText}</UnderlineText>
      }
      <View style={childrenStyle}>
        {children}
      </View>
    </GlassCard>
  )
}
export default OverlayView;