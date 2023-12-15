/* eslint-disable radix */
import React, { useCallback, useEffect } from 'react';
import {
	ActivityIndicator,
	Platform,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-player'
import { useService } from '@context/MobileOne/AccountSection/Service';
import { appDimentions } from '@utils/constant';
import View from '@core/inputs/View/View';
import Alert from '@core/utiles/Alert';
import { useFocusEffect } from '@react-navigation/native';


const FullVideoScreen = (props) => {


	const {
		isVideoLoading,
		setIsVideoLoading,
		potraitVideo,
		pausedVideo,
		setPausedVideo,
		rotateToPotrait,
		rotateToLandScape
	} = useService()

	const paddingTop = Platform.OS === 'android' ? appDimentions.screenHeight / 4 : appDimentions.screenHeight / 4;


	
	useFocusEffect(useCallback(() => {
		setIsVideoLoading(true)
		rotateToLandScape();
		return () => {
			rotateToPotrait();
			setIsVideoLoading(false)
		}
	}, [])); 



	return (
		<>
			<View safeAreaColor={Config.DARK_BLUE} requiredSafeArea style={styles.containerStyle}>
				<View style={{ paddingVertical: potraitVideo ? paddingTop : 0 }}>
					<View style={[styles.videoContainer]}>


						<VideoPlayer
							video={{ uri: props?.route?.params?.uri }}
							thumbnail={{ uri: props?.route?.params?.thumbnail }}
							autoplay={true}
							resizeMode={'contain'}
							onBuffer={(onBuffer) => {
								setIsVideoLoading(onBuffer.isBuffering)
								// console.log('onBuffer----', onBuffer)
							}}
							onError={(VideoError) => {
								// console.log("VideoError===",VideoError);
								Alert.simpLeAlert('', VideoError?.error.localizedFailureReason)
							}}
							disableFullscreen={true}
							paused={pausedVideo}
							onLoad={(onLoad) => {
								// console.log('onLoad----', onLoad)
								setIsVideoLoading(false)
							}}
							hideControls={false}
							ignoreSilentSwitch={'ignore'}
							style={[styles.backgroundVideo,]}
						/>


						{isVideoLoading ? (
							<ActivityIndicator
								animating
								size="large"
								color={Config.DARK_BLUE}
								style={[styles.playButton]}
							/>
						) : null}

						{pausedVideo ? (
							<TouchableOpacity
								style={styles.playButton}
								onPress={() => setPausedVideo(!pausedVideo)}>
								<Ionicons name='play-circle-outline' size={40}
									style={styles.playImage} color={Config.DARK_BLUE}
								/>
							</TouchableOpacity>
						) : null}

						<View style={[styles.iconMainContianer,{ paddingTop:  potraitVideo ? 10 : appDimentions.statusBarHeight}]}>

							<View style={styles.iconBgView}>
								<Icon
									name={'close-outline'}
									size={30}
									color={'white'}
									onPress={() => {
										props.navigation.goBack()
									}}
									style={styles.iconStyle}
								/>
							</View>
							<View style={styles.iconBgView}>
								<Icon
									name={potraitVideo ? 'fullscreen' : 'fullscreen-exit'}
									size={30}
									color={'white'}
									onPress={() => {
										if (potraitVideo) {
											rotateToLandScape();
										} else {
											rotateToPotrait();
										}
									}}
									style={styles.iconStyle}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};

export default FullVideoScreen;