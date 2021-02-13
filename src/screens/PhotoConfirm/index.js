import React, {useState} from 'react';

import {Text, View, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import storage from '@react-native-firebase/storage';
import Geolocation from '@react-native-community/geolocation';
import {Spinner} from 'native-base';

// Styles
import Styles from './styles';
import {useEffect} from 'react';

const PhotoConfirm = (props) => {
  const {route, navigation} = props;
  const {data} = route.params;

  const [sending, setSending] = useState(false);
  const [percent, setPercent] = useState(0);

  const sendPhoto = async () => {
    await setPercent(0);
    setSending(true);

    try {
      const uriSplit = data.uri.split('/');
      const reference = await storage().ref(uriSplit[uriSplit.length - 1]);

      const task = reference.putFile(data.uri);
      task.on('state_changed', (taskSnapshot) => {
        setPercent(
          (
            (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
            100
          ).toFixed(),
        );

        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      task.then(async () => {
        console.log('Image uploaded to the bucket!');
        const url = await reference.getDownloadURL();
        console.log('FINISHED');
        console.log('url: ', url);
        console.log(data);

        setSending(false);
      });
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.viewImage}>
        <Image style={Styles.image} source={{uri: data.uri}} />
        <View style={Styles.viewSendSuccess}>
          {percent === '100' ? (
            <Text style={Styles.textSendSuccess}>Enviado com sucesso!</Text>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={Styles.viewButtons}>
        <TouchableOpacity
          style={Styles.viewButtonBack}
          onPress={() => navigation.goBack()}>
          <Text style={Styles.textButton}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={percent === '100'}
          style={
            percent === '100'
              ? Styles.viewButtonSendDisabled
              : Styles.viewButtonSend
          }
          onPress={() => sendPhoto()}>
          <Text
            style={
              percent === '100' ? Styles.textButtonDisabled : Styles.textButton
            }>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
      {sending && (
        <View style={Styles.viewSending}>
          <Spinner color="white" />
          <Text style={Styles.textPercent}>{percent} %</Text>
        </View>
      )}
    </View>
  );
};

export default PhotoConfirm;
