import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, Text } from 'react-native';
import { Text as PaperText, withTheme } from 'react-native-paper';
import styles from './styles';
import { RFValue, customFontStyle, mergeAllStyle } from '@utils/constant';

const HeaderBoldBlueText = ({ style, text, noUpperCase, ...rest }) => {


  return (
    <Text style={[styles.headerBoldTextlDefaultStyle, style, customFontStyle(style, styles.headerBoldTextlDefaultStyle)]} {...rest}>{noUpperCase ? text : text?.toUpperCase()}</Text>
  );
};
/* Property types that need to passed for SubHeaderSmallBoldWhite text*/
HeaderBoldBlueText.propTypes = {
  style: RNText.propTypes.style,
};
/*Default props for SubHeaderSmallBoldWhite text*/
HeaderBoldBlueText.defaultProps = {

};


export default withTheme(HeaderBoldBlueText);