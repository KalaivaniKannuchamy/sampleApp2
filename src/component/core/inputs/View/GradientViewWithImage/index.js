import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import GradientView from '../GradientView';
import Config from 'react-native-config';
import { Text } from 'react-native-paper';
import SvgIcon from '@core/inputs/SvgIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue, appDimentions, customFontStyle } from '@utils/constant';
import LinearGradient from 'react-native-linear-gradient';
import Image from '@core/inputs/Image';
import FontRegularText from '@core/inputs/Text/FontRegularText';

const GradientViewWithImages = ({
  style,
  children,
  enable,
  image,
  imageStyle,
  headerStyle,
  headerTitle,
  onPress,
  color,
  resizeMode,
  underImageLinearColor,
  noImage,
  headerView,
  ...rest
}) => {
  return (
    < >

      <View
        // pointerEvents={enable ? 'auto' : 'none'}
        style={[styles.viewDefaultStyle, style]}
      >
        {
          noImage ?
            null :
            <Image
              style={[styles.imageStyle, imageStyle]}
              imageURL={image}
              resizeMode={resizeMode}
            />
        }
        {headerTitle ?
          <View style={[styles.headerView, headerView]}>
            <Icon
              name='arrow-back-outline'
              size={25}
              color={color ? color : Config.WHITE}
              style={styles.leftView}
              onPress={onPress}
            />
            <FontRegularText style={[
              styles.headerStyle,
              headerStyle,
              customFontStyle(headerStyle, styles.switchOffStyle),
            ]}>{headerTitle}</FontRegularText>
            <FontRegularText style={styles.rightView}></FontRegularText>
          </View>
          :
          null
        }
        <LinearGradient
          colors={underImageLinearColor ? underImageLinearColor : ["rgba(188,223,245,1)", "rgba(188,223,245,0.5)", 'rgba(255,255,255,0.0)']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          // locations={[0.6, 0.4]}
          // style={styles.linearGradient}
          style={styles.gradientViewStyle}

        />
        {/* <GradientView
          colors={[Config.BLUE,Config.BLUE,'rgba(255,255,255,0)','rgba(255,255,255,0)']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          gradientViewStyle={styles.gradientViewStyle} /> */}
        <View gradientViewStyle={styles.colorView} />
      </View>
      {
        children ?
          <GradientView

            gradientViewStyle={styles.children}>
            {children}
          </GradientView>
          :
          null
      }


    </>

  );
};

/* Property types that need to passed for view*/
GradientViewWithImages.propTypes = {
  children: PropTypes.element,
  enable: PropTypes.bool,
};

/*Default props for view*/
GradientViewWithImages.defaultProps = {
};

export default GradientViewWithImages;