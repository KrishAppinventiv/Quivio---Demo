import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {Images} from '../../assets';
import {colors} from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../component/CustomButton';
import {ScreenNames} from '../../navigator/screenNames';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../../component/CustomModal';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isValid, setIsValid] = useState(true);
  const inputRefs = useRef([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(2);
  const [entry, setEntry] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalVisible1, setmodalVisible1] = useState(false);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, '');
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every(digit => digit.length === 1)) {
      setEntry(true);
    } else {
      setEntry(false);
    }
  };

  const checkStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      await AsyncStorage.setItem('showIntro', 'false');

      if (isLoggedIn === 'true') {
        setmodalVisible(false);
        setmodalVisible1(false);
        navigation.navigate(ScreenNames.BottomTab);
      } else {
        setmodalVisible(false);
        setmodalVisible1(false);
        navigation.navigate(ScreenNames.Sign);
      }
    } catch (error) {
      console.error('Error checking status', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      setmodalVisible(false);
      setmodalVisible1(false);
      navigation.navigate(ScreenNames.Sign);
    } catch (error) {
      console.error('Error clearing login status', error);
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString === '639590') {
      setmodalVisible1(true);
    } else {
      setAttempts(prev => prev - 1);
      if (attempts > 0) {
        setErrorMessage(
          `The code you entered is incorrect, you have ${attempts} attempts remaining.`,
        );
      } else {
        setmodalVisible(true);
        setErrorMessage('No attempts remaining. Please request a new code.');
      }

      setIsValid(false);
    }
  };

  const handleNavigate = async () => {
    try {
      await AsyncStorage.setItem('showIntro', 'false');
      await AsyncStorage.removeItem('isLoggedIn');
      setmodalVisible(false);
      setmodalVisible1(false);
      navigation.navigate(ScreenNames.Sign);
    } catch (error) {
      console.error('Error clearing login status', error);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <SafeAreaView style={styles.container}>
        <View style={styles.greyContain}>
          <Image source={Images.backarrow} style={styles.arrowImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>Verify Account Access</Text>

          <Text style={styles.greyText}>
            Enter the code that we just sent to you on
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text>+1*****5435</Text>
          </View>
        </View>
        <View style={styles.textInput}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.ccpContain}>
              <TextInput
                ref={ref => (inputRefs.current[index] = ref)}
                value={digit}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => handleChange(text, index)}
                style={[
                  styles.input,
                  {
                    color: !isValid ? 'red' : 'black',
                  },
                ]}
              />
            </View>
          ))}
        </View>

        {errorMessage ? (
          <View style={{flexDirection: 'row', marginHorizontal: 37}}>
            <Image
              source={Images.alert}
              style={{marginTop: 10, marginRight: 10}}
            />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

        <View style={styles.Resend}>
          <TouchableOpacity>
            <Text style={styles.ResendText}>Resend</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.touchContain}>
          <CustomButton title="Confirm Code" onPress={handleSubmit} />
        </View>


        <CustomModal
          modalVisible={modalVisible}
          onRequestClose={() => setmodalVisible(false)}
          buttonText="Back to Login"
          headText="Too many failed attempts"
          TextContent="Your account has been locked, please try again in one hour."
          Img={Images.shield}
          handleModal={handleLogout}
          Imgbg={true}
        />

       

        <CustomModal
          modalVisible={modalVisible1}
          onRequestClose={() => setmodalVisible1(false)}
          buttonText="Back to Login"
          headText="Account Verified!"
          TextContent="Your account has been verified successfully."
          Img={Images.Verify}
          handleModal={handleNavigate}
          Imgbg={true}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtp;
