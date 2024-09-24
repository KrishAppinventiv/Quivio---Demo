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
import styles from './styles';
import {colors} from '../../theme';
import CustomButton from '../../component/CustomButton';
import Toast from 'react-native-toast-message';
import CustomToast from '../../component/CustomToast';
import CustomTextInput from '../../component/CustomTextInput';

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
      Toast.show({
        text1: 'Passwords does not match',
        type: 'custom_error',
      });
      setConfirmPasswordError('Passwords does not match');
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
      if (Password == text) {
        setConfirmPasswordError('');
      }
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
    <ScrollView style={styles.container} contentContainerStyle={{flex: 1}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1, alignContent: 'space-between'}}>
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
              {/* <View
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
              </View> */}

              <CustomTextInput
                placeholder="New Password"
                value={Password}
                onChangeText={text => handleTextChange(text, 'password')}
                error={passwordError}
                icon={Images.pass}
                type="password"
                
              />

              {(isPasswordFocused || hasPasswordInput) &&
                renderValidationFeedback()}
              {/* <View
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
              </View> */}

              <CustomTextInput
                placeholder="Confirm Password"
                value={CnfmPassword}
                onChangeText={text => handleTextChange(text, 'cnfrmpassword')}
                error={confirmPasswordError}
                icon={Images.pass}
                type="password"
              />
              {confirmPasswordError && (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              )}
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
      </SafeAreaView>
      <Toast
        config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
      />
    </ScrollView>
  );
};

export default ResetPassword;
