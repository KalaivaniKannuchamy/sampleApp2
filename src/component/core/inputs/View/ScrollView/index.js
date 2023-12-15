import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  ScrollView as ReactScrollView,
  View,
  ViewPropTypes,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

/* Component for scroll view 
style : Style for scrollview other than default style
children : children componets added in the scroll view
rest : if any properties other than above are applied they will apply automatically for this scrollview
 */
class ScrollView extends PureComponent {

  /* Property types that need to passed for scroll view*/
  static propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.element,
  };

  scrollToVertical(verticalValue) {
    this.scrollRef?.scrollTo({ x: 0, y: verticalValue, animated: true })
  }

  render() {

    const {
      keyboardShouldPersistTaps,
      ...rest
    } = this.props;
    return (
      // <KeyboardAvoidingView
      //   style={[styles.scrollDefaultStyle, this.props.style]}
      //   behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      //   enabled>
      //   <TouchableWithoutFeedback>
      //     <KeyboardAwareScrollView
      //       ref={(ref) => {
      //         this.scrollRef = ref;
      //       }}
      //       style={styles.scrollVw}
      //       keyboardShouldPersistTaps="always"
      //       {...rest}>
      //       {this.props.children}
      //     </ReactScrollView>
      //   </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={keyboardShouldPersistTaps ? keyboardShouldPersistTaps : 'always'}
        extraHeight={100}
        // bounces={false}
        extraScrollHeight={100}
        showsVerticalScrollIndicator={false}
        style={[styles.scrollVw, this.props.style]}
        {...rest}>
        <View style={styles.viewStyle}>{this.props.children}</View>
      </KeyboardAwareScrollView>
    );
  }
};


export default ScrollView;