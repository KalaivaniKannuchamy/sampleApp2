import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, Text } from 'react-native';
import { Text as PaperText, withTheme } from 'react-native-paper';
import styles from './styles';
import { RFValue, customFontStyle } from '@utils/constant';

const HeaderRegularBlueText = ({ style, text, noUpperCase }) => {
  // console.log('style?.fontSize--------',style?.fontSize, styles?.headerBoldTextlDefaultStyle)

  return (
    <Text style={[styles.headerBoldTextlDefaultStyle, style, customFontStyle(style, styles.headerBoldTextlDefaultStyle)]}>{noUpperCase ? text : text?.toUpperCase()}</Text>
  );
};
/* Property types that need to passed for SubHeaderSmallBoldWhite text*/
HeaderRegularBlueText.propTypes = {
  style: RNText.propTypes.style,
};
/*Default props for SubHeaderSmallBoldWhite text*/
HeaderRegularBlueText.defaultProps = {

};


export default withTheme(HeaderRegularBlueText);