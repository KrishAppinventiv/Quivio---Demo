import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenNames} from '../../navigator/screenNames';
import {Images} from '../../assets';

import {colors} from '../../theme';
import CustomButton from '../../component/CustomButton';

const ResetPassword = () => {
  const navigation = useNavigation();

  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [Password, SetPassword] = useState('');
  const [CnfmPassword, SetCnfrmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfrmPassword, setShowCnfrmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [hasPasswordInput, setHasPasswordInput] = useState(false);
  const [minLengthValid, setMinLengthValid] = useState(false);
  const [specialCharValid, setSpecialCharValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [upperlowerCaseValid, setUpperlowerCaseValid] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);

  const validatePassword = password => {
    const minLengthRequirement = password.length >= 8;
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberRequirement = /\d/.test(password);
    const upperlowerCaseRequirement =
      /[A-Z]/.test(password) && /[a-z]/.test(password);

    setMinLengthValid(minLengthRequirement);
    setSpecialCharValid(specialCharRequirement);
    setNumberValid(numberRequirement);

    setUpperlowerCaseValid(upperlowerCaseRequirement);

    return (
      minLengthRequirement &&
      specialCharRequirement &&
      numberRequirement &&
      upperlowerCaseRequirement
    );
  };

  const validateConfirmPassword = cnfrmpassword => {
    if (Password !== cnfrmpassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else if (Password == cnfrmpassword) {
      setConfirmPasswordError('');
      return true;
    }
  };

  const handleTextChange = (text, field) => {
    if (field === 'password') {
      SetPassword(text);
      setHasPasswordInput(text.length > 0);
      validatePassword(text);
    } else if (field === 'cnfrmpassword') {
      SetCnfrmPassword(text);
      validateConfirmPassword(text);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCnfrmPasswordVisibility = () => {
    setShowCnfrmPassword(!showCnfrmPassword);
  };

  const handleSubmitEditing = field => {
    if (field === 'password') {
      const isPassValid = validatePassword(Password);
      if (isPassValid) {
        passwordInput.focus();
      }
    }
  };

  const renderValidationFeedback = () => (
    <View style={styles.validationContainer}>
      <View style={styles.validationRow}>
        <Image
          source={minLengthValid ? Images.check : Images.cross}
          style={styles.validationIcon}
        />
        <Text style={styles.validationText}>8 characters or more</Text>
      </View>
      <View style={styles.validationRow}>
        <Image
          source={specialCharValid ? Images.check : Images.cross}
          style={styles.validationIcon}
        />
        <Text style={styles.validationText}>1 or more special characters</Text>
      </View>
      <View style={styles.validationRow}>
        <Image
          source={numberValid ? Images.check : Images.cross}
          style={styles.validationIcon}
        />
        <Text style={styles.validationText}>1 or more numbers</Text>
      </View>
      <View style={styles.validationRow}>
        <Image
          source={upperlowerCaseValid ? Images.check : Images.cross}
          style={styles.validationIcon}
        />
        <Text style={styles.validationText}>Upper and lowercase</Text>
      </View>
      {/* <View style={styles.validationRow}>
                <Image
                    source={lowerCaseValid ? Images.check : Images.cross}
                    style={styles.validationIcon}
                />
                <Text style={[styles.validationText, lowerCaseValid && styles.valid]}>
                    Lowercase letter
                </Text>
            </View> */}
    </View>
  );

  const handleFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleSubmit = () => {
    const isPasswordValid = validatePassword(Password);
    const isConfirmPasswordValid = validateConfirmPassword(CnfmPassword);

    if (isPasswordValid && isConfirmPasswordValid) {
      setConfirmPasswordError('');
      setmodalVisible(true);
    } else {
      // Handle error case
    }

    return;
  };

  const handleModal = () => {
    setmodalVisible(false);
    navigation.navigate(ScreenNames.Sign);
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={styles.imageContain}>
            <TouchableOpacity>
              <Image source={Images.quiv} style={styles.img} />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.textContain1}>
              <Text style={styles.signText}>Reset Password</Text>

              <Text style={styles.greyText}>Enter in your new password</Text>
            </View>

            <View style={styles.textInputContain}>
              <View
                style={[
                  styles.inputContainer1,
                  passwordError && {borderColor: 'red', borderWidth: 1},
                ]}>
                <View style={styles.passwordContain}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={Images.pass} style={{marginStart: 10}} />
                    <TextInput
                      placeholder="New Password"
                      placeholderTextColor="#4D5876"
                      style={styles.input}
                      value={Password}
                      onChangeText={text => handleTextChange(text, 'password')}
                      onSubmitEditing={() => handleSubmitEditing('password')}
                      secureTextEntry={!showPassword}
                      returnKeyType="next"
                      blurOnSubmit={false}
                      autoFocus
                    />
                  </View>
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image source={Images.eye} style={styles.img2} />
                  </TouchableOpacity>
                </View>
              </View>

              {(isPasswordFocused || hasPasswordInput) &&
                renderValidationFeedback()}
              <View
                style={[
                  styles.inputContainer1,
                  confirmPasswordError && {borderColor: 'red', borderWidth: 1},
                ]}>
                <View style={styles.passwordContain}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={Images.pass} style={{marginStart: 10}} />
                    <TextInput
                      placeholder="Confirm Password"
                      placeholderTextColor="#4D5876"
                      style={styles.input}
                      value={CnfmPassword}
                      onChangeText={text =>
                        handleTextChange(text, 'cnfrmpassword')
                      }
                      onSubmitEditing={() => handleSubmitEditing('password')}
                      secureTextEntry={!showCnfrmPassword}
                      returnKeyType="done"
                      blurOnSubmit={false}
                      ref={input => (passwordInput = input)}
                    />
                  </View>
                  <TouchableOpacity onPress={toggleCnfrmPasswordVisibility}>
                    <Image source={Images.eye} style={styles.img2} />
                  </TouchableOpacity>
                </View>
              </View>
              {confirmPasswordError && (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              )}
            </View>
            <View style={styles.touchContain}>
              <CustomButton
                title="Submit"
                onPress={handleSubmit}
                disabled={
                  !(
                    Password &&
                    CnfmPassword &&
                    !passwordError &&
                    !confirmPasswordError
                  )
                }
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
                      backgroundColor: '#D3F7FF',
                      opacity: 0.5,
                    }}>
                    <Image source={Images.key} />
                  </View>
                  <Text style={styles.modalheading}>Password Updated!</Text>
                  <Text style={styles.modalText}>
                    Your new password has been updated
                  </Text>
                  <Text style={styles.modalText1}>successfully</Text>
                  <Pressable style={styles.modalButton} onPress={handleModal}>
                    <Text style={styles.modalButtonText}>Back to Login</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  img: {
    height: 55,
    width: 85,
  },
  imageContain: {
    marginTop: 10,
    marginStart: 20,
    marginBottom: 20,
  },
  signText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
  textContain1: {
    marginTop: 60,
    marginStart: 35,
  },
  greyText: {
    color: '#4F5F72',
    marginTop: 5,
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'left',
  },
  textInputContain: {
    marginHorizontal: 35,
  },
  inputContainer: {
    height: 63,
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  touch: {
    marginTop: 15,
    height: 56,
    width: '100%',
    opacity: 0.2,
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  touchContain: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingBottom: 20,
    marginHorizontal: 30,
  },
  input: {
    alignItems: 'center',
    padding: 10,
    color: 'black',
    width: '70%',
  },
  img2: {
    height: 16,
    width: 16,
    marginEnd: 10,
    alignItems: 'center',
  },
  passwordContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer1: {
    height: 63,
    marginTop: 30,
    borderRadius: 7,

    backgroundColor: 'white',
    justifyContent: 'center',
  },
  validationContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  validationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  validationIcon: {
    width: 17,
    height: 17,
    marginEnd: 10,
  },
  validationText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4F5F72',
  },

  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    marginHorizontal: 30,
    height: '31%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalheading: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: '700',
    lineHeight: 26,
  },
  modalText: {
    marginHorizontal: 37,
    fontSize: 13,

    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: 19.5,
  },
  modalText1: {
    marginHorizontal: 37,
    fontSize: 13,
    marginBottom: 20,
    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: 19.5,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius: 5,
    height: 51,
    width: '45%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  containerThree: {
    flexDirection: 'row',
    // borderWidth:1,
    backgroundColor: '#F8F9F9',
    marginTop: 20,
    height: 60,
    padding: 15,
  },
});
