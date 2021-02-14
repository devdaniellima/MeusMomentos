/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LogBox} from 'react-native';

import AppInsideNavigation from './src/navigation/AppInsideNavigation';

LogBox.ignoreLogs(['asynchronous tasks']);

const App = () => {
  return (
    <>
      <AppInsideNavigation />
    </>
  );
};

export default App;
