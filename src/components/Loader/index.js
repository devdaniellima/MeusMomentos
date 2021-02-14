import React from 'react';

import {View, Text} from 'react-native';
import {Spinner} from 'native-base';

//Styles
import Styles from './styles';

const Loader = (props) => {
  const {visible, percent} = props;

  return visible ? (
    <View style={Styles.viewSending}>
      <Spinner color="white" />
      {percent !== undefined && (
        <Text style={Styles.textPercent}>{percent} %</Text>
      )}
    </View>
  ) : (
    <></>
  );
};

export default Loader;
