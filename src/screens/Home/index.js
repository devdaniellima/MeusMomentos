import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

// Styles
import Styles from './styles';

const Home = (props) => {
  const {navigation} = props;

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
        <Text style={Styles.take}>Take a Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
