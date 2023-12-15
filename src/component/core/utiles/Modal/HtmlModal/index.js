import React, { useState, useEffect } from 'react';
import View from '@core/inputs/View/View';
import { Portal, Modal } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native'
import Config from 'react-native-config';
import HTMLText from '@core/inputs/Text/HTMLText';
import close_popup from '../../../../../../assets/SVG/Navigation/close_popup.svg'
import SvgIcon from '@core/inputs/SvgIcon';

const HtmlModal = ({
    visible,
    descriptionText,
    onCancelPress
}) => {

    const [showModel, setShowModel] = useState(visible)
    useEffect(() => {
        setShowModel(visible)
    }, [visible]);

    return (
        <Portal>
            <Modal
                theme={{
                    colors: {
                        backdrop: 'rgba(0, 0, 0, 0.3)',
                    },
                }}
                contentContainerStyle={styles.dialogStyle}
                visible={visible}
                onDismiss={onCancelPress}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeadingViewStyle}>
                        <View> 
                            <SvgIcon
                                xml={close_popup}
                                height={35}
                                width={35}
                                onPress={onCancelPress}
                                style={styles.cancelIconStyle}
                            />
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <HTMLText
                            html={descriptionText}
                            baseStyle={styles.modalStyle}
                        />


                    </ScrollView>
                </View>
            </Modal>
        </Portal>
    )
}
export default HtmlModal;