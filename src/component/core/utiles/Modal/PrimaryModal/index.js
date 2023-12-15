import React, { useState, useEffect } from 'react';
import HeaderBoldWhiteText from '@core/inputs/Text/HeaderBoldWhiteText';
import View from '@core/inputs/View/View';
import { Portal, Dialog } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@core/inputs/Button';
import SmallWhiteRegularText from '@core/inputs/Text/SmallWhiteRegularText';
import UnderlineText from '@core/inputs/Text/UnderlineText';
import GradientView from '@core/inputs/View/GradientView';
import Config from 'react-native-config';
import SvgIcon from '@core/inputs/SvgIcon';
import close_popup from '../../../../../../assets/SVG/Navigation/close_popup.svg'
import warning from '../../../../../../assets/SVG/Sonstige/warning.svg'
import { Platform } from 'react-native';

const PrimaryModal = ({
    visible,
    headerText,
    descriptionText,
    subDescription,
    onCancelPress,
    onButtonClick,
    buttonText,
    downloadText,
    descriptionTextStyle,
    buttonStyle,
    mainContainerStyle,
    headerTextStyle,
    underlineText,
    subdescriptionText,
    svgIcon,
    svgSize,
    logoutText,
    logoutunderlineText,
    underlineTextStyle
}) => {

    const [showModel, setShowModel] = useState(visible)

    useEffect(() => {
        setShowModel(visible)
    }, [visible]);

    return (
        <Portal>
            <Dialog visible={showModel} dismissable={false} style={Platform.OS == "ios" ? styles.dialogIosStyle : styles.dialogStyle}>
                <GradientView
                    gradientViewStyle={styles.container}
                >
                    <GradientView
                        colors={[Config.GRADIENT_DARK_BLUE, Config.DARK_BLUE]}
                        start={{ x: 0.9, y: 0.7 }}
                        end={{ x: 0.5, y: 0.1 }}
                        gradientViewStyle={[styles.mainContainer, mainContainerStyle]}>

                        {onCancelPress ? <SvgIcon
                            xml={close_popup}
                            height={24}
                            width={24}
                            onPress={onCancelPress}
                            style={styles.cancelIconStyle}
                        />
                            :
                            null
                        }

                        {headerText ? <HeaderBoldWhiteText style={headerTextStyle} text={headerText} /> : null}
                        <SvgIcon
                            xml={svgIcon ? svgIcon : warning}
                            height={svgSize || 48}
                            width={svgSize || 43}
                            style={styles.iconStyle}
                        />
                        <View>
                            <SmallWhiteRegularText style={[styles.iconStyle, { textAlign: 'center' }, descriptionTextStyle]}>{descriptionText}</SmallWhiteRegularText>
                            <SmallWhiteRegularText style={[styles.iconStyle, { textAlign: 'center' }, descriptionTextStyle]}>{subdescriptionText}</SmallWhiteRegularText>
                        </View>
                        {downloadText ?
                            null :

                            <View style={styles.iconViewStyle}>
                                <Icon
                                    style={styles.iconStyle}
                                    onPress={onCancelPress}
                                    size={25}
                                    color={
                                        'white'
                                    }
                                    name="download"
                                />
                                <UnderlineText>{subDescription}</UnderlineText>
                            </View>}
                            <View>
                          {logoutText &&  <Button
                                whiteButton
                                onPress={onButtonClick}
                                buttonStyle={buttonStyle}
                            >
                                {logoutText}
                            </Button> }
                            {logoutunderlineText && <UnderlineText onPress={onCancelPress} style={[styles.underlineText,underlineTextStyle]}>{logoutunderlineText}</UnderlineText>}
                            </View> 
                        <View>
                       { buttonText && <Button
                                whiteButton
                                onPress={onButtonClick}
                                buttonStyle={buttonStyle}
                            >
                                {buttonText}
                            </Button>}
                            {underlineText && <UnderlineText onPress={onCancelPress} style={styles.underlineText}>{underlineText}</UnderlineText>}
                        </View>
                    </GradientView>
                </GradientView>
            </Dialog>
        </Portal>
    )
}
export default PrimaryModal;