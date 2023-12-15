import React from 'react'
import { Chip as PaperChip } from 'react-native-paper';
import styles from './styles';
import View from '@core/inputs/View/View';
import SvgIcon from '@core/inputs/SvgIcon';
import {Pressable, Text} from 'react-native'
import FontRegularText from '@core/inputs/Text/FontRegularText';

const Chip=({ icon, title, onPress, chipView, titleStyle, isClickable,isSvg ,containerStyle}) =>{

  /**
   * if you want ot use image as icon use this 
   * example: icon={require('../assets/chameleon.jpg')}
   */

  const iconName = icon ? icon : "information"

  return (
    <>
    {isSvg ?
      (
        <Pressable onPress={onPress?onPress():null} style={[styles.container,containerStyle]}>
          <SvgIcon
            xml={isSvg}
            height={20}
            width={20}
            onPress={() => {
              if (onPress) {
                onPress();
              }
            }}
            style={styles.iconStyle}
          />

          <FontRegularText numberOfLines={1} ellipsizeMode='tail' style={[styles.textStyle, titleStyle]}>{title}</FontRegularText>
        </Pressable>
       ):
      (
    <PaperChip
      icon={iconName}
      textStyle={[styles.textStyle, titleStyle]}
      style={[styles.chipView, chipView]}
      disabled={!isClickable}
      onPress={() => {
        if (onPress) {
          onPress()
        }
      }
      }>{title}</PaperChip>
      )}
      </>
  )
}

export default Chip