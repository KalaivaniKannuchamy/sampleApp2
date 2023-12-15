import React, { useState, useEffect } from 'react';
import View from '@core/inputs/View/View';
import { Portal, Dialog } from 'react-native-paper';
import styles from './styles';
import Lottie from 'lottie-react-native';


const LottieLoader = ({
    visible,
    headerText,
    descriptionText,
    subDescription,
    onCancelPress,
    onButtonClick,
    buttonText
}) => {

    const [showModel, setShowModel] = useState(visible)

    useEffect(() => {
        setShowModel(visible)
    }, [visible]);

    return (
        <Portal>
            <Dialog visible={showModel} dismissable={false} style={styles.dialogStyle}>
                <View style={styles.mainContainer}>
                    <Lottie
                        source={require('../../../../../../assets/Lottie/loading_SAMPLE.json')}
                        autoPlay
                        loop
                        style={styles.lottieContainer}
                    />
                </View>
            </Dialog>
        </Portal>
    )
}
export default LottieLoader;