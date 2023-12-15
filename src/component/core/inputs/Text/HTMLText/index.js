
import React from 'react';
import Config from 'react-native-config';
import { withTheme } from 'react-native-paper';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';
import { appDimentions, customFontStyle, fontBoldStyle, fontExtraBoldStyle, fontMediumStyle } from '@utils/constant';
import { Pressable } from 'react-native';
 
const HTMLText = ({
  html,
  onPress,
  bTagStyle,
  pTagStyle,
  baseStyle,
  ...rest
}) => {
  let customFont = customFontStyle(baseStyle)
  let base = { ...baseStyle,  ...customFont };
  // console.log('base=====>', base.fontSize);
  return (
    <Pressable onPress={onPress ? onPress : null}>
    <RenderHTML
      source={{ html: html }} 
      systemFonts={[...defaultSystemFonts, Config.FONT_REGULAR, Config.FONT_BOLD, Config.FONT_MEDIUM, Config.FONT_XBOLD]}
      
      fallbackFonts={[Config.FONT_REGULAR]}
      tagsStyles={{
        a :{
          // color: Config.UNDERLINE_BLUE,
          textDecorationColor: Config.UNDERLINE_BLUE
        },
        p :{
          // color: Config.UNDERLINE_BLUE,
          textDecorationColor: Config.UNDERLINE_BLUE,
          fontFamily: Config.FONT_REGULAR,
          ...pTagStyle
        },
        b:{
          fontFamily: Config.FONT_XBOLD,
          // color: Config.UNDERLINE_BLUE,
          ...bTagStyle
        },
        strong:{
          fontFamily: Config.FONT_XBOLD,
          // ...bTagStyle
        }
      }}
      baseStyle={base}
      // enableExperimentalMarginCollapsing={true}
      // contentWidth={appDimentions.screenWidth}
      {...rest}
    />
    </Pressable>
  );
};


export default withTheme(HTMLText);
