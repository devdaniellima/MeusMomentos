import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/Home';
import PhotoScreen from '../screens/Photo';
import PhotoConfirmScreen from '../screens/PhotoConfirm';
import MomentScreen from '../screens/Moment';

// HOME STACK
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Photo" component={PhotoScreen} />
      <HomeStack.Screen name="PhotoConfirm" component={PhotoConfirmScreen} />
      <HomeStack.Screen name="Moment" component={MomentScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppInsideNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{tabBarVisible: false}}
          component={HomeStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
