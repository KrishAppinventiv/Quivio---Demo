import {View, Text, Animated, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Images} from '../../assets';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const tutorialSeen = await AsyncStorage.getItem('tutorialSeen');
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

        setTimeout(() => {
          if (tutorialSeen === 'true') {
            if (isLoggedIn === 'true') {
              navigation.reset({
                index: 0,
                routes: [{name: ScreenNames.BottomTab}],
              });
            } else {
              navigation.reset({
                index: 0,
                routes: [{name: ScreenNames.Sign}],
              });
            }
          } else {
            navigation.reset({
              index: 0,
              routes: [{name: ScreenNames.Tutorial}],
            });
          }
        }, 3000);
      } catch (error) {
        console.error('Error checking status', error);
      }
    };

    checkStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        resizeMethod="resize"
        style={styles.imageStyle}
        source={Images.quivio_img}
      />
    </View>
  );
};

export default SplashScreen;
