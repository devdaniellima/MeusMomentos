import React, {useState} from 'react';
import database from '@react-native-firebase/database';

import {Text, View, TouchableOpacity, Image} from 'react-native';
import storage from '@react-native-firebase/storage';

// Components
import Loader from '../../components/Loader';

// Styles
import Styles from './styles';

const PhotoConfirm = (props) => {
  const {route, navigation} = props;
  const {data} = route.params;

  const [sending, setSending] = useState(false);
  const [percent, setPercent] = useState(0);
  const [transferred, setTransferred] = useState(false);

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
        const now = new Date();

        const newReference = database().ref('/photos').push();
        newReference
          .set({
            latitude: data.latitude,
            longitude: data.longitude,
            url,
            datetime: now.getTime(),
          })
          .then(() => {
            setTransferred(true);
            setSending(false);
            console.log('inserted');
          })
          .catch((error) => {
            setTransferred(false);
            setSending(false);
            console.log(error);
          });
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
          {transferred ? (
            <Text style={Styles.textSendSuccess}>Enviado com sucesso!</Text>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={Styles.viewButtons}>
        <TouchableOpacity
          style={Styles.viewButtonBack}
          onPress={() => {
            if (transferred) {
              navigation.navigate('Home');
            } else {
              navigation.goBack();
            }
          }}>
          <Text style={Styles.textButton}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={transferred}
          style={
            transferred ? Styles.viewButtonSendDisabled : Styles.viewButtonSend
          }
          onPress={() => sendPhoto()}>
          <Text
            style={transferred ? Styles.textButtonDisabled : Styles.textButton}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
      <Loader percent={percent} visible={sending} />
    </View>
  );
};

export default PhotoConfirm;
