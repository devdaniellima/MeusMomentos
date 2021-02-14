import React from 'react';

import {View, Text, Image} from 'react-native';

//Styles
import Styles from './styles';

const ItemHome = (props) => {
  const {data} = props;
  console.log(data);

  return (
    <View style={Styles.row}>
      <Image style={Styles.image} source={{uri: data.url}} />
      <View style={Styles.content}>
        <Text style={Styles.title}>Localização</Text>
        <Text style={Styles.subTitle}>
          {data.latitude} / {data.longitude}
        </Text>
        <Text style={Styles.title}>Data</Text>
        <Text style={Styles.subTitle}>{data.datetime}</Text>
      </View>
    </View>
  );
};

export default ItemHome;
