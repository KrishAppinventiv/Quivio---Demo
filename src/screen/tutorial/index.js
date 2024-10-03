import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {Component, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Images} from '../../assets';
import {ScreenNames} from '../../navigator/screenNames';
import styles from './styles';
import {colors} from '../../theme';

const {width: screenWidth} = Dimensions.get('window');

export default function TutorialScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const banners = [Images.tutorialImg, Images.slide, Images.illustration];

  const renderItem = ({item}) => (
    <View style={styles.bannerContainerOut}>
      <Image source={item} style={styles.image} />
      <Text style={styles.text}>Welcome to Tutorial</Text>
    </View>
  );

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('tutorialSeen', 'true');

      navigation.navigate(ScreenNames.Sign);
    } catch (error) {
      console.error('Error updating tutorial status', error);
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x / screenWidth,
          );
          setActiveSlide(index);
        }}
        keyExtractor={(item, index) => index.toString()}
        style={styles.carousel}
      />

      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: activeSlide === index ? 'black' : 'lightgray',
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={handleContinue}>
          <View style={styles.getstarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
