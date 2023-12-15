import PropTypes from 'prop-types';
import React from 'react';
import {SafeAreaView, View as ReactView, ViewPropTypes} from 'react-native';
import styles from './styles';
// import { SafeAreaView } from 'react-native-safe-area-context';

/* Component for view
style : Style for view other than default style
children : children componets added in the view
enable : boolean for enable pointer events
requiredSafeArea : boolean to enable safe area layout
rest : if any text properties other than above  are applied they will apply automatically for this view
 */
const View = ({
  style,
  children,
  enable,
  requiredSafeArea,
  safeAreaColor,
  ...rest
}) => {
  return (
    <ReactView
      pointerEvents={enable ? 'auto' : 'none'}
      style={[styles.viewDefaultStyle, style]}
      {...rest}>
      {requiredSafeArea ? (
        <SafeAreaView
          style={[
            styles.viewDefaultStyle,
            style,
            {backgroundColor: safeAreaColor},
          ]}>
          {children}
        </SafeAreaView>
      ) : (
        children
      )}
    </ReactView>
  );
};

/* Property types that need to passed for view*/
View.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.element,
  enable: PropTypes.bool,
  requiredSafeArea: PropTypes.bool,
  safeAreaColor: PropTypes.string,
};

/*Default props for view*/
View.defaultProps = {
  enable: true,
  requiredSafeArea: false,
};

export default View;