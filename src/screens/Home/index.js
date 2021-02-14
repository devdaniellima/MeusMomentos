import React, {useState, useEffect} from 'react';

import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Components
import Loader from '../../components/Loader';
import ItemHome from '../../components/ItemHome';

// Styles
import Styles from './styles';

const Home = (props) => {
  const {navigation} = props;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = async () => {
    setLoading(true);
    await database()
      .ref('photos')
      .once('value', (result) => {
        setLoading(false);
        console.log(result);
        setData(result.toJSON());
      });
  };

  const signIn = async () => {
    await auth()
      .signInAnonymously()
      .then(async () => {
        console.log('User signed in anonymously');

        loadData();
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  useEffect(() => {
    signIn();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.viewTitle}>
        <Text style={Styles.textTitle}>Meus momentos</Text>
      </View>
      <View style={Styles.viewScroll}>
        {data === null ? (
          <View style={Styles.viewNoMoments}>
            <Text style={Styles.textNoMoments}>
              Você ainda não registrou nenhum momento importante!
            </Text>
          </View>
        ) : (
          <ScrollView style={Styles.scroll}>
            {Object.keys(data).map((item, index) => {
              return <ItemHome key={index} data={data[item]} />;
            })}
          </ScrollView>
        )}
      </View>
      <View style={Styles.viewButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
          <Text style={Styles.take}>Tirar uma foto</Text>
        </TouchableOpacity>
      </View>

      <Loader visible={loading} />
    </View>
  );
};

export default Home;
