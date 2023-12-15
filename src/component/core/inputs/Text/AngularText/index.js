import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';

/* Component for  Angular Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const AngularText = ({
  oneStyle,
  twoStyle,
  threeStyle,
  fourStyle,
  fiveStyle,
  theme,
  fontWeight,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  ...rest
}) => {
  return (
    <PaperText style={[styles.angularDefaultOneStyle, oneStyle]} {...rest}>
      {textOne}
      <PaperText style={[styles.angularDefaultTwoStyle, twoStyle]} {...rest}>
        {textTwo}
        <PaperText
          style={[styles.angularDefaultThreeStyle, threeStyle]}
          {...rest}>
          {textThree}
          <PaperText
            style={[styles.angularDefaultFourStyle, fourStyle]}
            {...rest}>
            {textFour}
            <PaperText
              style={[styles.angularDefaultFiveStyle, fiveStyle]}
              {...rest}>
              {textFive}
            </PaperText>
          </PaperText>
        </PaperText>
      </PaperText>
    </PaperText>
  );
};

/* Property types that need to passed for Angular text*/
AngularText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for Angular text*/
AngularText.defaultProps = {};

export default withTheme(AngularText);
