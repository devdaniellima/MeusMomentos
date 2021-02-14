import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import database from '@react-native-firebase/database';

// Utils
import Format from '../../utils/format';

// Styles
import Styles from './style';

const Moment = (props) => {
  const {route, navigation} = props;
  const {datetime, latitude, longitude, url, id} = route.params;

  const removeFromFirebase = () => {
    database()
      .ref(`photos/${id}`)
      .remove()
      .then(() => {
        Alert.alert('Sucesso!', 'O momento foi removido com sucesso!', [
          {text: 'Voltar', onPress: () => navigation.goBack()},
        ]);
      })
      .catch(() => {
        Alert.alert('Algo deu errado!', 'Tente novamente mais tarde', [
          {text: 'Voltar', onPress: () => {}},
        ]);
      });
  };

  const remove = () => {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja remover esse momento?',
      [
        {text: 'Voltar', onPress: () => {}},
        {text: 'Remover', onPress: () => removeFromFirebase()},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.viewImage}>
        <Image style={Styles.image} source={{uri: url}} />
      </View>
      <View style={Styles.viewActions}>
        <View>
          <Text style={Styles.title}>Localização</Text>
          <Text style={Styles.subTitle}>
            {latitude} / {longitude}
          </Text>
          <Text style={Styles.title}>Data / Hora</Text>
          <Text style={Styles.subTitle}>{Format.formatDateBr(datetime)}</Text>
        </View>
        <View style={Styles.viewButtons}>
          <TouchableOpacity
            style={Styles.buttonRemove}
            onPress={() => remove()}>
            <Text style={Styles.title}>Remover</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonBack}
            onPress={() => navigation.goBack()}>
            <Text style={Styles.title}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Moment;
