/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import AppInsideNavigation from './src/navigation/AppInsideNavigation';

const App = () => {
  useEffect(() => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  }, []);

  return (
    <>
      <AppInsideNavigation />
    </>
  );
};

export default App;
