import React, { Children, useEffect, useState } from 'react';
import { Pressable, StatusBar, TouchableOpacity, View } from 'react-native';
import { Button, Menu, Modal, Portal, Provider, Text } from 'react-native-paper';
import styles from './styles';
import tooltip2 from '../../../../../assets/SVG/Sonstige/tooltip2.svg'
import Tooltip from 'react-native-walkthrough-tooltip';
import { RFValue } from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';

const ToolTip = ({ visible, text, onDismiss, anchor, backgroundColor, contentTextStyle, tooltipStyle, containerStyle, backgroundStyle, arrowStyle, arrowSize, contentViewStyle, onPress, placement, supportedOrientations, displayInsets, childContentSpacing, Svg, }) => {
  const [showLoader, setShowLoader] = useState(visible);

  useEffect(() => {
    setShowLoader(visible);
  }, [visible]);



  return (
    // <Menu
    //   anchor={anchor}
    //   visible={showLoader}
    //   onDismiss={onDismiss}
    //   contentStyle={[styles.menuView, containerStyle]}
    // >
    //   <View style={styles.InnerMainContainer}>
    //     <View style={[styles.triangle]} />
    //     <View style={styles.innerSecondryView}>
    //       <Text style={styles.menuText}>{text}</Text>
    //     </View>
    //   </View>
    // </Menu>
    <View>
      <Tooltip
        disableShadow={true}
        horizontalAdjustment={0}
        useReactNativeModal={true}
        tooltipStyle={[styles.tooltipStyle, tooltipStyle]}
        contentStyle={[styles.menuView, containerStyle]}
        backgroundStyle={backgroundStyle ? backgroundStyle : 'transparent'}
        arrowStyle={arrowStyle}
        arrowSize={arrowSize}
        isVisible={showLoader}
        backgroundColor={backgroundColor ? backgroundColor : 'transparent'}
        showChildInTooltip={false}
        content={
          <View style={[[styles.contentViewStyle, contentViewStyle]]}>
            <FontRegularText
            noScaling={true}
            style={[
              styles.contentTextStyle,
              contentTextStyle,
              {fontSize: RFValue(contentTextStyle?.fontSize ? contentTextStyle?.fontSize :  styles.contentTextStyle.fontSize || 16)}
              ]}>{text}</FontRegularText>
          </View>
        }
        topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
        placement={placement ? placement : 'top'}
        onClose={onDismiss}
        supportedOrientations={supportedOrientations}
        displayInsets={displayInsets}
        childContentSpacing={childContentSpacing}>
        {Svg ? (
          <SvgIcon
            xml={tooltip2}
            height={20}
            width={20}
            onPress={onPress}
            style={[styles.iconStyle]}
          />
        ) :
          anchor
        }
      </Tooltip>
    </View>
  );
};

export default ToolTip;
