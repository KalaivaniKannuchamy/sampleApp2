/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Modal, StatusBar} from 'react-native';
import {styles} from './styles';
import AnimatedLottieView from 'lottie-react-native';
import GradientView from '../View/GradientView';
import {BlurView} from '@react-native-community/blur';
import Config from 'react-native-config';

/* Component for loader
showHud : boolean to show the loader
loaderColor : color of the loader
showLoadingText : boolean to show loading text
loadingText : text to set on loader
loadingTextStyle : loading text style
 */
const Hud = ({showHud}) => {
  const [showLoader, setShowLoader] = useState(showHud);
  const animationRef = useRef();
  useEffect(() => {
    setShowLoader(showHud);
  }, [showHud]);

  return (
    <Modal
      visible={showLoader}
      transparent={true}
      onShow={() => {
        animationRef.current?.play();
        animationRef.current?.play(30, 120);
      }}
      style={{zIndex: 10}}>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={Config.STATUS_COLOR}
      />
      <BlurView
        style={{flex: 1}} // Adjust the style as per your needs
        blurType="light" // Choose the blur type (light, dark, or extraLight)
        blurAmount={3} // Adjust the blur intensity
        reducedTransparencyFallbackColor="white" // Choose a fallback color (optional)
      >
        <GradientView
          colors={['rgba(234, 255, 255, 0.6)', 'rgba(234, 255, 255, 0.6)']}
          gradientViewStyle={styles.mainContainer}>
          <AnimatedLottieView
            source={require('../../../../../assets/Lottie/loading_SAMPLE.json')}
            autoPlay
            loop={true}
            ref={animationRef}
            style={styles.lottieContainer}
          />
        </GradientView>
      </BlurView>
    </Modal>
  );
};

export default Hud;
