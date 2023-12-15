import { appDimentions, fontMediumStyle, fontRegularStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    padding: 10,
    borderColor:Config.GRAY3,
    borderWidth: 1,
    marginVertical: 10
  },
  errorMsg: {
    color: Config.RED,
    fontSize: appDimentions.errorMessageFontSize,
    ...fontRegularStyle,
    marginVertical: 5,
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: appDimentions.inputFieldTopMargin,
    // backgroundColor:'green',
    ...fontRegularStyle,
    justifyContent: 'space-between'
  },
  defaultInputStyle: {
    width: "65%",
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    paddingHorizontal:5,
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: appDimentions.fieldFontSize + 2,
    ...fontRegularStyle,
    color:Config.BLACK,

  },
  nameView: {
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
    fontFamily:  Config.FONT_REGULAR,
    marginTop: 7 
  },
  secondryNameView:{
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
    fontFamily:  Config.FONT_REGULAR
  },
  title: {
    maxWidth: '90%',
    color: Config.UNDERLINE_BLUE,
    fontSize: appDimentions.fieldFontSize,
    letterSpacing:0.24,
    lineHeight:18,
    ...fontMediumStyle
    
  },
  secondryThemetitle:{
    fontSize:appDimentions.fieldFontSize,
    lineHeight:18,
    letterSpacing:0.24,
    ...fontMediumStyle,
    color: Config.UNDERLINE_BLUE
  },
  secondryThemecontainerStyle:{
    backgroundColor: 'transparent',
    marginTop: appDimentions.inputFieldTopMargin,
  },
  secondryThemedefaultInputStyle:{
    width: "100%",
    fontSize: appDimentions.fieldFontSize + 2 ,
    ...fontRegularStyle,
    color:Config.BLACK,
    backgroundColor: 'transparent',
  },
  toolContainerStyle:{
    backgroundColor: Config.BLACK,
    width:appDimentions.screenWidth * 0.35,
  //  height:appDimentions.screenWidth * 0.22,
   left:0,
   borderRadius:10
  }

})