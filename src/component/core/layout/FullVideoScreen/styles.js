import { appDimentions } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
export default StyleSheet.create({
  scrollViewStyle: {
    height: '100%',
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  kontaktHotlineHeadlineStyle: {
    fontSize: 18,
    marginBottom: 30,
  },
  backgroundVideo: {
    width: '100%',
    height: appDimentions.screenWidth - 40,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    alignSelf: 'center',
  },
  videoContainer: {
    borderWidth: 4,
    borderColor: Config.DARK_BLUE,
  },
  playButton: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
  },
  playImage: {
    width: 44,
    height: 44,
  },

  iconBgView: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 30,
    justifyContent: 'center',
  },
  iconMainContianer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
  },
});