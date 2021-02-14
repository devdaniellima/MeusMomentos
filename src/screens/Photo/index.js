import React, {useState} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import storage from '@react-native-firebase/storage';
import Geolocation from '@react-native-community/geolocation';

// Styles
import Styles from './styles';

const Photo = (props) => {
  const {navigation} = props;

  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    await Geolocation.getCurrentPosition(
      async (info) => {
        // COORDS LOCATION
        const data = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        };

        try {
          const {uri} = await camera.takePictureAsync({
            quality: 0.1,
            forceUpOrientation: true,
            fixOrientation: true,
            skipProcessing: true,
          });

          data.uri = uri;

          navigation.navigate('PhotoConfirm', {data});
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <View style={Styles.container}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={Styles.RNCamera}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        captureAudio={false}>
        <Text style={Styles.textTop}>
          Capture um momento que você ache importante!
        </Text>
        <View style={Styles.viewButtons}>
          <TouchableOpacity
            onPress={() => onTakePicture()}
            style={Styles.btnTakeAPicture}
          />
        </View>
      </RNCamera>
    </View>
  );
};

export default Photo;
