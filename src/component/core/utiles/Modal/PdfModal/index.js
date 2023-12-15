import React, { useState, useEffect } from 'react';
import { Portal, Dialog } from 'react-native-paper';
import styles from './styles';
import PDFView from 'react-native-view-pdf';
import Config from 'react-native-config';
import View from '@core/inputs/View/View';
import Icon from 'react-native-vector-icons/Ionicons';
import { appDimentions } from '@utils/constant';
import { Animated, Text ,StatusBar, Platform} from 'react-native';
import Hud from '@core/inputs/Hud';
import FontRegularText from '@core/inputs/Text/FontRegularText';



const PdfModal = ({ visible, onCancelPress, onLoad,  title, onPdfDownload, resource, resourceType }) => {


    const [AnimationDialog] = useState(new Animated.Value(appDimentions.screenWidth))
    const [showModel, setShowModel] = useState(visible)
    const [opacityView] = useState(new Animated.Value(1))


    useEffect(() => {
        setShowModel(visible)
    }, [visible]);

    useEffect(() => {
        if(visible){
            checkFun()
        }
    }, [visible]);

    const checkFun = () => {
        Animated.parallel([
            Animated.timing(
                AnimationDialog,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: 'true'
                }
            ).start()
        ])
    }
    const closeModal = async () => {

        Animated.timing(
            AnimationDialog,
            {
                toValue: appDimentions.screenWidth,
                duration: 500,
                useNativeDriver: 'true'
            }
        ).start()

        setTimeout(() => {
            onCancelPress()
        }, 500);
    }


    return (
        <Portal>
            <Dialog visible={showModel} dismissable={false} style={[Platform.OS == "ios" ? styles.dialogIosStyle : styles.dialogStyle, { opacity: opacityView }]}>
            <StatusBar  barStyle='light-content' translucent={false} backgroundColor={Config.LINK_BLUE} />
                <Animated.View style={[styles.viewStyle, {
                    width: appDimentions.screenWidth,
                    opacity: opacityView,
                    transform: [{
                        translateX: AnimationDialog
                    }]
                }]}
                >
                    <View style={styles.innerContainer}>
                        <Icon
                            onPress={() => closeModal()}
                            size={35}
                            color={Config.WHITE}
                            name="chevron-back-sharp"
                        />
                        {
                            title ?
                                <FontRegularText numberOfLines={1} style={styles.titleStyle}>{title}</FontRegularText>
                                :
                                null
                        }
                        <Icon
                            onPress={onPdfDownload}
                            size={30}
                            color={Config.WHITE}
                            name="download-outline"
                        />
                    </View>
                    <PDFView
                        fadeInDuration={100.0}
                        style={styles.pdfViewStyle}
                        onLoad={() => { if(onLoad) onLoad() }}
                        resource={resource}
                        resourceType={resourceType == 'base64' ? 'base64' : 'url'}
                    />

                </Animated.View>
            </Dialog>
        </Portal>
    )
}


export default PdfModal;