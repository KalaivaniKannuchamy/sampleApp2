/**
 * LoginView for Keycloack
 *
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  Modal,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { IconButton } from 'react-native-paper';
import FontRegularText from '@core/inputs/Text/FontRegularText';

const LoginView = ({ showPopUp, onNavigationChange, onCrossPress, url, Title }) => {

  useEffect(() => {
    setShowView(showPopUp)
  }, [showPopUp, showView])

  const [showView, setShowView] = useState()

  return (
    <Modal
      visible={showView}
      animationType={'slide'}
      transparent={true}
    >
      <View style={styles.webView}>
        <View style={styles.InnerWebView}>
          <View style={styles.headeView}>
          <IconButton
              icon={'close'}
              onPress={onCrossPress}
            />
            <FontRegularText numberOfLines={1} style={styles.titleTextstyle}>{Title}</FontRegularText>
          </View>
          <WebView
            useWebkit
            startInLoadingState={true}
            cacheEnabled={false}
            showsHorizontalScrollIndicator={false}
            onNavigationStateChange={async (data) => {
              onNavigationChange(data)
            }}
            source={{
              uri: url
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

/* Property types that need to passed for button*/
LoginView.propTypes = {
  showPopUp : PropTypes.bool,
  onNavigationChange : PropTypes.func,
  onCrossPress : PropTypes.func,
  url : PropTypes.string,
  Title : PropTypes.string,
};

/*Default props for button*/
LoginView.defaultProps = {
  showPopUp : false,
  onNavigationChange : ()=>{},
  onCrossPress : ()=>{},
  url : '',
  Title : 'SAMPLE',
};

export default LoginView;