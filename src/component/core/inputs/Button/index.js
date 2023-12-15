import PropTypes from 'prop-types';
import React from 'react';
import {Pressable, Text} from 'react-native';
import {
  Button as PaperButton,
  Text as PaperText,
  withTheme,
} from 'react-native-paper';
import styles from './styles';
import GradientView from '../View/GradientView';
import Config from 'react-native-config';
import View from '../View/View';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {customFontStyle} from '@utils/constant';

// TODO: Extend Buttons properties
// Type = Default = Contained, Outline, Text, Flat
// Icon = True | False,
// Icon Position = START | END,
// Default things to include
// Color, Disable, IconComponent, Size, sx<InlineStyle>

/* Component for button
 mode : Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
titleStyle : Style for button text other than defaultTitleStyle style
buttonStyle : Style for button other than defaultButtonStyle style
theme : Theme is used when we set any theme for button otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above are applied they will apply automatically for this button
 */
const Button = ({
  mode,
  theme,
  fontWeight,
  titleStyle,
  whiteButton,
  buttonStyle,
  greyButton,
  onPress,
  style,
  gradientViewStyle,
  buttonTextViewStyle,
  arrowIcon,
  uppercase,
  colors,
  ...rest
}) => {
  const buttonStyles = whiteButton
    ? styles.defaultWhiteButtonStyle
    : greyButton
    ? styles.defaultGreyButtonStyle
    : styles.defaultButtonStyle;
  const textStyles = whiteButton
    ? styles.defaultBlackTitleStyle
    : styles.defaultTitleStyle;
  return whiteButton ? (
    <PaperButton
      uppercase={uppercase ? true : false}
      labelStyle={[
        textStyles,
        titleStyle,
        customFontStyle(titleStyle, textStyles),
        theme.fonts[fontWeight],
      ]}
      onPress={onPress}
      style={[buttonStyles, buttonStyle]}
      mode={mode}
      {...rest}
    />
  ) : (
    <Pressable
      style={[styles.gradientButtonStyle, buttonStyle]}
      onPress={onPress}>
      <GradientView
        colors={colors ? colors : [Config.GRADIENT_DARK_BLUE, Config.DARK_BLUE]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}
        gradientViewStyle={[styles.gradientViewStyle, gradientViewStyle]}>
        <View style={buttonTextViewStyle}>
          <PaperText
            numberOfLines={1}
            style={[
              styles.regularTextDefaultStyle,
              style,
              customFontStyle(style, styles.regularTextDefaultStyle),
            ]}
            {...rest}
          />

          {arrowIcon ? (
            <Icon
              name="arrow-right"
              style={styles.iconStyle}
              size={16}
              color={Config.WHITE}
            />
          ) : null}
        </View>
      </GradientView>
    </Pressable>
  );
};

/* Property types that need to passed for button*/
Button.propTypes = {
  mode: PropTypes.string,
  titleStyle: Text.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for button*/
Button.defaultProps = {
  mode: 'contained',
  fontWeight: 'bold',
};

export default withTheme(Button);
