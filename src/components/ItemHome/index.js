import React from 'react';

import {TouchableOpacity, View, Text, Image} from 'react-native';

//Styles
import Styles from './styles';

const ItemHome = (props) => {
  const {data, navigation, id} = props;

  return (
    <TouchableOpacity
      style={Styles.row}
      onPress={() => navigation.navigate('Moment', {...data, ...{id}})}>
      <Image style={Styles.image} source={{uri: data.url}} />
      <View style={Styles.content}>
        <Text style={Styles.title}>Localização</Text>
        <Text style={Styles.subTitle}>
          {data.latitude} / {data.longitude}
        </Text>
        <Text style={Styles.title}>Data / Hora</Text>
        <Text style={Styles.subTitle}>{data.datetime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHome;
