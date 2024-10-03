import React from 'react';
import {Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/home';
import {ScreenNames} from '../screenNames';
import Profile from '../../screen/profile';

import Favorites from '../../screen/favorites';
import Account from '../../screen/account';
import Menu from '../../screen/menu';
import { Images } from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Home}
        name={ScreenNames.HOME}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={Images.home}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Account}
        name={ScreenNames.ACCOUNT}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={Images.account}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Favorites}
        name={ScreenNames.FAVORITES}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={Images.favorite}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Profile}
        name={ScreenNames.Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={Images.menu}
                style={styles.icon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})
