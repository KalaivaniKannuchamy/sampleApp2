import View from '@core/inputs/View/View';
import PropTypes from 'prop-types';
import React from 'react';
import { Pressable, Text as RNText } from 'react-native';
import Config from 'react-native-config';
import { IconButton, Text as PaperText, withTheme } from 'react-native-paper';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import SvgIcon from '@core/inputs/SvgIcon';
import { RFValue, appDimentions, customFontStyle, fontMediumStyle } from '@utils/constant';
import HTMLText from '../HTMLText';
/* Component for SmallBlackRegular Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const FontWithIcon = ({
  textStyle,
  theme,
  fontWeight,
  title,
  iconName,
  iconSize,
  iconColor,
  containerStyle,
  isHTML,
  onPress,
  isSVG,
  height,
  width,
  description,
  descriptionTextStyle,
  ...rest
}) => {
  return (
    <Pressable onPress={() => { onPress ? onPress() : null }} style={[styles.containerStyle, containerStyle]}>
      {
        isSVG ?
          <SvgIcon
            xml={isSVG}
            onPress={() => { onPress ? onPress() : null }}
            height={height || 17}
            width={width || 21}
          /> :
          <IconButton
            icon={iconName}
            onPress={() => { onPress ? onPress() : null }}
            size={iconSize || 25}
            color={iconColor || Config.UNDERLINE_BLUE}
            animated={true}
          />
      }
      {
        isHTML ?
          <HTMLText
            html={title}
            baseStyle={textStyle}
            onPress={() => { onPress ? onPress() : null }}
            
          />
          :
          <View>
          <PaperText onPress={() => { onPress ? onPress() : null }} style={[styles.regularTextDefaultStyle, textStyle, customFontStyle(textStyle, styles.regularTextDefaultStyle)]} {...rest} >{title}</PaperText>
            {
              description &&
              <PaperText
                onPress={() => { onPress ? onPress() : null }}
                style={[styles.descripTextDefaultStyle, descriptionTextStyle, customFontStyle(descriptionTextStyle, styles.descripTextDefaultStyle)]} {...rest} >
                {description}
              </PaperText>
            }
          </View>
      }
    </Pressable>
  );
};
/* Property types that need to passed for SmallBlackRegular text*/
FontWithIcon.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerStyle: View.propTypes.style,
  isHTML: PropTypes.bool,
  description: PropTypes.string
};

/*Default props for SmallBlackRegular text*/
FontWithIcon.defaultProps = {};

export default withTheme(FontWithIcon);
