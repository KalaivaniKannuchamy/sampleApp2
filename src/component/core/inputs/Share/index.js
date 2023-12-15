import Alert from '@core/utiles/Alert';
import { ANDROID_PDF_DOWNLOAD_PERMISSION, devicetype, storage, storageKeys } from '@utils/constant';
import {Component} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import RNShare from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';
var RNFS = require('react-native-fs');

export default class Share extends Component {
  static open(options, callback, base64DataPresent, download, fileDownload) {
    // console.log(options &&
    //   options.url &&
    //   base64DataPresent != null &&
    //   base64DataPresent != undefined &&
    //   base64DataPresent)
    if (
      options &&
      options.url &&
      base64DataPresent != null &&
      base64DataPresent != undefined &&
      base64DataPresent
    ) {
      if (download != null && download != undefined && download) {
        // console.log('1');
        downloadFile(options, callback);
      } else {
        // console.log('2');
        openRNShare(options, callback);
      }
    } else if (options && options.url) {
      // console.log('Share-----3');

      convertUrlAndShare(options, callback, fileDownload);
    } else if (options && options.urls && options.urls.length > 0) {
      // console.log('Share----4');

      convertUrlAndShareMultiple(options, callback);
    } else {
      // console.log('Share----5');

      openRNShare(options, callback);
    }
  }

  // finalOptions.url = 'data:application/pdf;base64,' + base64Data
}

const convertUrlAndShareMultiple = async (options, callback) => {
  const fs = RNFetchBlob.fs;
  let imagePath = null;
  let finalOptions = options;
  let urls = [];
  let tempCount = 0;
  let imageCount = 0;
  options.urls.forEach((data) => {
    if (Platform.OS === 'ios') {
      imageCount += 1;
      const localFile = `${RNFS.DocumentDirectoryPath}/${
        options.title || 'images'
      }${imageCount}.jpg`;
      const downloadOptions = {
        fromUrl: data,
        toFile: localFile,
      };
      RNFS.downloadFile(downloadOptions)
        .promise.then(() => {
          tempCount += 1;
          urls.push(`file://${localFile}`);
          if (tempCount == options.urls.length) {
            finalOptions.urls = urls;
            openRNShare(finalOptions, callback);
          }
        })
        .catch((error) => {
          tempCount += 1;
          if (callback) {
            callback(false, error);
          }
        });
    } else {
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('GET', data)
        .then((resp) => {
          imagePath = resp.path();
          return resp.readFile('base64');
        })
        .then((base64Data) => {
          tempCount += 1;
          urls.push('data:image/png;base64,' + base64Data);
          if (tempCount == options.urls.length) {
            // //console.log("urls===", urls)
            finalOptions.urls = urls;
            openRNShare(finalOptions, callback);
          }
          return fs.unlink(imagePath);
        })
        .catch((error) => {
          if (callback) {
            callback(false, error);
          }
        });
    }
  });
};

const convertUrlAndShare = async (options, callback, fileDownload) => {
  const fs = RNFetchBlob.fs;
  let imagePath = null;
  let finalOptions = options;
  if (Platform.OS == 'ios') {
    const localFile = `${RNFS.DocumentDirectoryPath}/${options?.title ? options?.title : `/Default.pdf`}`;
    const downloadOptions = {
      fromUrl: options.url,
      toFile: localFile,
    };
    // console.log('Share---------1downloadOptions119',downloadOptions, RNFS.DocumentDirectoryPath)
    RNFS.downloadFile(downloadOptions)
      .promise.then((data) => {
        // console.log('Share---------2RNFS.downloadFile123',data, `file://${localFile}`)

        setTimeout(() => {
          finalOptions.url = `file://${localFile}`;
          openRNShare(finalOptions, callback);
        }, 200);
      })
      .catch((error) => {
        // console.log('Share---------2error',error)

        if (callback) {
          callback(false, error);
        }
      });
  } else {
    if (fileDownload != null && fileDownload) {
      downloadFileAndroid(options, callback);
    } else {
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('GET', options.url)
        .then((resp) => {
          imagePath = resp.path();
          return resp.readFile('base64');
        })
        .then((base64Data) => {
          setTimeout(() => {
            finalOptions.url = 'data:application/pdf;base64,' + base64Data;
            openRNShare(finalOptions, callback);
          }, 200);
          return fs.unlink(imagePath);
        })
        .catch((error) => {
          if (callback) {
            callback(false, error);
          }
        });
    }
  }
};

const openRNShare = async (optionss, callback) => {
  // //console.log(optionss.title)
  try {
    // console.log('Share---------3start', optionss)

    await RNShare.open(optionss);
    // console.log('Share---------4end')

    if (callback) {
      callback(true, null);
    }
  } catch (error) {
    // console.log('Share---------5error', error)

    if (callback) {
      callback(false, 'error');
    }
  }
};

const downloadFileAndroid = async (options, callback) => {
  // //console.log(dirs);
  // //console.log(`${options.title.replace(/ /g, '_')}`);
 var keyDataString = await storage.encryptedGetItem(storageKeys.KEY_VALUE_PAIR)
 var keyData={}
 var alertMessage = '';
 if(keyDataString){
  keyData = JSON.parse(keyDataString)
 }
//  console.log('keydata===>1',keyData['ek_alert_download_pdf'])

  if (keyData) {
    if (
      keyData['ek_alert_download_pdf'] !== undefined &&
      keyData['ek_alert_download_pdf'].content !== undefined
    ) {
      alertMessage = keyData['ek_alert_download_pdf'].content.replace(/\\n/g, '\n');
    } else {
      // //console.log('From json---->', key, appLanguageStrings[key]);
      alertMessage ='ek_alert_download_pdf';
    }
  } else {
    alertMessage ='ek_alert_download_pdf';
  }
if(devicetype <= 10){
  request(ANDROID_PDF_DOWNLOAD_PERMISSION).then((storageResult) => {
    switch (storageResult) {
      case RESULTS.DENIED:
        callback(false, 'error');
        break;
      case RESULTS.BLOCKED:
        Alert.simpLeAlert(
          '',
          alertMessage,
        );
        callback(false, 'error');
        break;
      case RESULTS.GRANTED:
        downlaodAndroidFileFunc(options, callback);
        break;
    }
  });
}else{
  downlaodAndroidFileFunc(options, callback);

}

};

const downlaodAndroidFileFunc = async (options, callback) => {
  const dirs = RNFetchBlob.fs.dirs;
  const config = RNFetchBlob.config;

  // //console.log(dirs);
  // //console.log(`${options.title.replace(/ /g, '_')}`);
  var downloadPath = dirs.DownloadDir + `/${options.title.replace('.pdf',`_${new Date().getTime()}.pdf`)}`;
  const optionsData = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, // true will use native manager and be shown on notification bar.
      notification: true,
      path: downloadPath,
      description: 'Downloading.',
      title:  options.title ||'SAMPLE.pdf' ,
    },
  };

  config(optionsData)
    .fetch('GET', options.url)
    .then((res) => {
      callback(true, null);
    }).catch((error)=>{
      callback(false, error);
    });
};

const downloadFile = async (options, callback) => {
  const dirs = RNFetchBlob.fs.dirs;
  //console.log(dirs);
  //console.log(`${options.title.replace(/ /g, '_')}`);

  var keyDataString = await storage.encryptedGetItem(storageKeys.KEY_VALUE_PAIR)
  var alertMessage = '';
  if(keyDataString){
    keyData = JSON.parse(keyDataString)
   }
  // console.log('keydata===>2',keyData['ek_alert_download_pdf'])
 
   if (keyData) {
     if (
       keyData['ek_alert_download_pdf'] !== undefined &&
       keyData['ek_alert_download_pdf'].content !== undefined
     ) {
       alertMessage = keyData['ek_alert_download_pdf'].content.replace(/\\n/g, '\n');;
     } else {
       // //console.log('From json---->', key, appLanguageStrings[key]);
       alertMessage ='ek_alert_download_pdf';
     }
   } else {
     alertMessage ='ek_alert_download_pdf';
   }

  if (Platform.OS === 'ios') {
  } else {
    if(devicetype <= 10){
    request(ANDROID_PDF_DOWNLOAD_PERMISSION).then(
      (storageResult) => {
        switch (storageResult) {
          case RESULTS.DENIED:
            callback(false, 'error');
            break;
          case RESULTS.BLOCKED:
            Alert.simpLeAlert(
              '',
              alertMessage,
            );
            callback(false, 'error');
            break;
          case RESULTS.GRANTED:
            downlaodAndroid(options, callback);
            break;
        }
      },
    );
    }else{
      downlaodAndroid(options, callback);
    }
  }
};

const downlaodAndroid = async (options, callback) => {
  const dirs = RNFetchBlob.fs.dirs;
  //console.log(dirs);
  //console.log(`${options.title.replace(/ /g, '_')}`);
  var path = dirs.DownloadDir + `/${options.title.replace(/ /g, '_').replace('.pdf',`_${new Date().getTime()}.pdf`)}`;
  try {
    RNFetchBlob.fs.writeFile(path, options.url, 'base64').then((res) => {
      //console.log('File : ', res);
      RNFetchBlob.android.addCompleteDownload({
        title: options.title,
        description: 'Download complete',
        mime: 'application/pdf',
        path: path,
        showNotification: true,
      });
      callback(true, null);
    }).catch((error)=>{
      callback(false, error);
    });
  } catch (error) {
    if (callback) {
      callback(false, 'error');
    }
  }
};