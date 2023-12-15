/**
 * Created by Eswar Sairam on 19/09/20
 * In thi class it requires 3 inputs.
 * 1) style of a image.
 * 2) source of a image
 * 3) resizeMode of a image
 * 4) placeHolder of the image to shw as defalut until image load. It should give like this require('path/of/image')
 * 5) (...rest) other one properties of the Image
 **/

import React, {useState} from 'react';
import {Image as ReactImage} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {useEffect} from 'react';
import {
  ImageSelection,
  mediaImage,
  storage,
  storageKeys,
} from '@utils/constant';

const Image = ({
  disable,
  containerStyle,
  style,
  source,
  resizeMode,
  touchableView,
  placeHolder,
  imageURL,
  onPress,
  noPlaceholderUrl,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(true);
  var imageURLData = imageURL;
  var placeHolderImage = '';
  const {staticContentData} = useStaticContent();

  useEffect(() => {
    ReactImage.prefetch(imageURLData, () => {
      // Call Any Function Here on Finish Prefetch.
    });

    checkCached();
    callplaceHolderImage();
  }, []);

  useEffect(() => {}, [localImage]);

  const [localImage, setLocalImage] = useState('hallo');

  const callplaceHolderImage = async () => {
    placeHolderImage = await storage.encryptedGetItem(
      storageKeys.PLACEHOLDER_IMAGE,
    );
    setLocalImage(placeHolderImage);
  };
  const checkCached = async () => {
    await ReactImage.queryCache([imageURLData]).then(res => {});
  };
  const fastImageResizeMode = () => {
    switch (resizeMode) {
      case 'contain':
        return FastImage.resizeMode.contain;
      case 'center':
        return FastImage.resizeMode.center;
      case 'cover':
        return FastImage.resizeMode.cover;
      case 'stretch':
        return FastImage.resizeMode.stretch;
      default:
        return FastImage.resizeMode.cover;
    }
  };
  // console.log("loaded=======1", localImage);

  return (
    // <FastImage style={[styles.defaultStyle, style]} {...rest} source={{ uri: imageURLData }} resizeMode={resizeMode} />
    // <View pointerEvents={ disable ? 'none' : 'auto'} style={[styles.container,containerStyle]}>

    <>
      {noPlaceholderUrl
        ? null
        : loaded && (
            <FastImage
              style={[styles.defaultStaticStyle, style]}
              source={{
                uri:
                  ImageSelection(
                    staticContentData,
                    mediaImage.ek_app_news_fallback_content_1,
                  ).imageUrl || localImage,
              }}
              resizeMode={'cover'}
            />
          )}
      {imageURLData ? (
        <FastImage
          style={[styles.defaultStyle, style]}
          source={{uri: imageURLData}}
          resizeMode={fastImageResizeMode()}
          onLoadEnd={() => {
            // console.log('===========hallo=====',)
            setLoaded(false);
          }}
          onProgress={() => {
            // console.log('===========hallo=====1',)
            setLoaded(true);
          }}
        />
      ) : noPlaceholderUrl ? null : (
        <ReactImage
          style={[styles.defaultStaticStyle, style]}
          source={{
            uri:
              ImageSelection(
                staticContentData,
                mediaImage.ek_app_news_fallback_content_1,
              ).imageUrl || localImage,
          }}
          resizeMode={'cover'}
        />
      )}
    </>

    // </View>
  );
};

Image.defaultProps = {
  placeHolder: 'https://SAMPLE-be.spreadspace.de/media/responsive/294/1',
  resizeMode: 'cover',
};

export default Image;
