import FontBoldText from '@core/inputs/Text/FontBoldText';
import React from 'react';
import Config from 'react-native-config';
import {IconButton} from 'react-native-paper';
import View from '../View';
import styles from './styles';
import GlassCard from '@core/inputs/View/GlassCard';
import SvgIcon from '@core/inputs/SvgIcon';
import bearbeiten from '../../../../../../assets/SVG/Interface/bearbeiten.svg';

const ViewWithEditButton = ({
  onPress,
  containerStyle,
  title,
  isNoEdit,
  children,
  isSvg,
  ...rest
}) => {
  const {t} = useStaticContent();
  return (
    <GlassCard
      gradientViewStyle={[styles.mainContainer, containerStyle]}
      onPress={onPress}
      {...rest}>
      <View style={styles.iconwithTextStyle}>
        <FontBoldText numberOfLines={1} style={styles.titleStyle}>
          {title}
        </FontBoldText>

        {!isNoEdit &&
          (isSvg ? (
            <SvgIcon
              xml={bearbeiten}
              height={13}
              width={13}
              onPress={() => onPress()}
              style={styles.iconStyle}
            />
          ) : (
            <IconButton
              icon={'pencil'}
              color={Config.DARK_BLUE}
              onPress={() => onPress()}
              style={styles.iconStyle}
            />
          ))}
      </View>
      {children}
    </GlassCard>
  );
};

export default ViewWithEditButton;
