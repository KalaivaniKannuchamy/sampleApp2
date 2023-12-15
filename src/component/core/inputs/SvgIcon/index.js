/** 
 * Created by Eswar Sairam on 19/09/20
 * In thi class it requires 3 inputs. 
 * 1) style of a image.
 * 2) source of a image
 * 3) resizeMode of a image
 * 4) placeHolder of the image to shw as defalut until image load. It should give like this require('path/of/image')
 * 5) (...rest) other one properties of the Image
 **/

import React from 'react';
import { SvgWithCss } from 'react-native-svg';
import { Pressable } from 'react-native'

const SvgIcon = ({ xml, onPress, style, ...rest }) => {

  return (
    <Pressable onPress={()=>{onPress ? onPress() : null}} style={style}>
      <SvgWithCss
        xml={xml}
        {...rest}
      />
    </Pressable>
  )
}





export default SvgIcon;