import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  Modal,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  Keyboard
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import {colors} from '../../theme';

import {Images} from '../../assets';
import validator from 'validator';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screenNames';
import CustomButton from '../../component/CustomButton';
import CustomTextInput from '../../component/CustomTextInput';
import Toast from 'react-native-toast-message';
import CustomToast from '../../component/CustomToast';
import {SafeAreaView} from 'react-native-safe-area-context';
const {height: screenHeight} = Dimensions.get('window');
const headerHeight = screenHeight * 0.25;

const Sign = () => {
  const navigation = useNavigation();
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [count, Setcount] = useState(0);
  const keyboardHeight = useRef(new Animated.Value(0)).current;

 

  const data = [
    {
      img: Images.analy,
      text: 'Aesthetical Graphics',
    },
    {
      img: Images.clock,
      text: 'Real time statistics',
    },
    {
      img: Images.flask,
      text: 'Track equipment usage',
    },
  ];

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      Animated.timing(keyboardHeight, {
        toValue: event.endCoordinates.height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [keyboardHeight]);

  const renderItem = ({item}) => (
    <View style={styles.renderContain}>
      <View style={styles.flatContain}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.flatText}>{item.text}</Text>
      </View>
    </View>
  );

  const validateEmail = email => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid Email format');
      return false;
    } else {
      setEmailError('');
    }

    return true;
  };

  const validatePassword = password => {
    if (password.length < 6) {
      setPasswordError('Password should have at least 6 characters');
      return false;
    } else {
      setPasswordError('');
    }

    return true;
  };

  const handleTextChange = (text, field) => {
    if (field === 'email') {
      SetEmail(text);
      validateEmail(text);
    } else if (field === 'password') {
      SetPassword(text);
      validatePassword(text);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmitEditing = field => {
  //   if (field === 'email') {
  //     const isEmailValid = validateEmail(Email);
  //     if (isEmailValid) {
  //       passwordInput.focus();
  //     }
  //   } else if (field === 'password') {
  //     validatePassword(Password);
  //   }
  // };

  const handleSubmit = async () => {
    const isEmailValid = validateEmail(Email);
    const isPasswordValid = validatePassword(Password);
    if (!isEmailValid || !isPasswordValid) {
      return;
    } else {
      if (Email === 'Krish@gmail.com' && Password === 'Krish@123') {
        try {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          SetEmail('');
          SetPassword('');

          navigation.reset({
            index: 0,
            routes: [{name: ScreenNames.BottomTab}],
          });
        } catch (error) {
          console.error('Error saving login status', error);
        }
      } else {
        Toast.show({
          text1: 'Invalid credentials. Please try again',
          type: 'custom_error',
        });

        if (count > 3) {
          setmodalVisible(true);
          Setcount(0);
        } else {
          Setcount(count + 1);
        }
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
     
        <ImageBackground source={Images.Imgbg} style={styles.upper}>
          <Image source={Images.q_img} style={styles.Qp} />

          <View style={styles.textContain}>
            <Text style={styles.qvText}>QUIVIO</Text>
            <Text style={styles.PersonalText}>
              Your Personal CarWash Assistant
            </Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </ImageBackground>
    
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={screenHeight*0.002}
        style={{flex: 1}}> */}
        {/* <View style={{backgroundColor: colors.bg}}> */}
        <Animated.View
        style={{
          transform: [{ translateY: keyboardHeight.interpolate({
              inputRange: [0, 300], // You can adjust based on your keyboard height
              outputRange: [0, -300], // Adjust accordingly
              extrapolate: 'clamp',
            })}],
          backgroundColor: colors.bg,
        }}
      >
          <View style={styles.textContain1}>
            <Text style={styles.signText}>Sign In</Text>

            <Text style={styles.greyText}>with your valid credentials</Text>
          </View>

          <View style={styles.textInputContain}>
            <CustomTextInput
              placeholder="Email Password"
              value={Email}
              onChangeText={text => handleTextChange(text, 'email')}
              error={emailError}
              icon={Images.mail}
              type="email"
              
            />
            {emailError && <Text style={{color: 'red'}}>{emailError}</Text>}

            <CustomTextInput
              placeholder="Password"
              value={Password}
              onChangeText={text => handleTextChange(text, 'password')}
              error={passwordError}
              icon={Images.pass}
              type="password"

            />

            {passwordError && (
              <View>
                <Text style={{color: 'red'}}>{passwordError}</Text>
              </View>
            )}
          </View>

          <View style={styles.forget}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenNames.Forgot)}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchContain}>
            <CustomButton
              title="Primary"
              onPress={handleSubmit}
              disabled={!(Email && Password && !emailError && !passwordError)}
            />
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setmodalVisible(false)}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F79E98',
                    opacity: 0.5,
                  }}>
                  <Image source={Images.errorLock} />
                </View>
                <Text style={styles.modalheading}>Account Locked</Text>
                <View>
                  <Text style={styles.modalText1}>
                    Your account has been locked due to
                  </Text>
                  <Text style={styles.modalText1}>
                    too many failed attempts. Please try
                  </Text>
                  <Text style={styles.modalText}>after some time.</Text>
                </View>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => setmodalVisible(false)}>
                  <Text style={styles.modalButtonText}>Okay</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        {/* </View> */}
        </Animated.View>
      {/* </KeyboardAvoidingView> */}
      <Toast
        config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
      />
    </ScrollView>
  );
};

export default Sign;
