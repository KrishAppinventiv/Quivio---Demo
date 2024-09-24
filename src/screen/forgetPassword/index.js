import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,Modal,Pressable
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenNames} from '../../navigator/screenNames';
import {Images} from '../../assets';
import {colors} from '../../theme';
import validator from 'validator';
import CustomTextInput from '../../component/CustomTextInput';
import CustomButton from '../../component/CustomButton';
import styles from './styles';
import Toast from 'react-native-toast-message';
import CustomToast from '../../component/CustomToast';


const Forgot = () => {
  const navigation = useNavigation();

  const [Email, SetEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [modalVisible,setmodalVisible] = useState(false);

  const validateEmail = email => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid Email format');
      return false;
    } else {
      setEmailError('');
    }

    return true;
  };

  const handleTextChange = (text, field) => {
    if (field === 'email') {
      SetEmail(text);
      validateEmail(text);
    }
  };

  const handleSubmitEditing = field => {
    if (field === 'email') {
      const isEmailValid = validateEmail(Email);
      if (isEmailValid) {
        passwordInput.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const isEmailValid = validateEmail(Email);

    if (!isEmailValid) {
     

      return;
    } else {
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: ScreenNames.Reset}],
      // });
      if(Email!= 'Krish@gmail.com'){
        Toast.show({
          text1: 'Email not found. Contact admin.',
          type: 'custom_error',
        });
      }else{
        setmodalVisible(true)
      }
      
    }
  };

  const handleModal = () =>{
    setmodalVisible(false);
    navigation.navigate(ScreenNames.Reset)

 }
  return (
    // <ScrollView style={styles.container}>

    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.imageContain}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.Sign)}>
            <Image source={Images.arrow} style={styles.img} />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.textContain1}>
            <Text style={styles.signText}>Forgot Password</Text>

            <Text style={styles.greyText}>
              Reset your password with just a few clicks
            </Text>
          </View>

          <View style={styles.textInputContain}>
            <CustomTextInput
              placeholder="Email Address"
              value={Email}
              onChangeText={text => handleTextChange(text, 'email')}
              error={emailError}
              icon={Images.mail}
              type="email"
              
            />

            {emailError && (
              <View>
                <Text style={{color: colors.red}}>{emailError}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.touchContain}>
          <CustomButton title="Send Link" onPress={handleSubmit} disabled={!(Email && !emailError)} />
        </View>

        <Modal
        animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setmodalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={{height:50,width:50,borderRadius:30,justifyContent:'center',alignItems:'center',backgroundColor:'#D3F7FF',opacity:0.5}}>
                <Image source={Images.Link} />
                </View>
              <Text style={styles.modalheading}>Link Sent !</Text>
              <Text style={styles.modalText}>The link to reset your password has</Text>
              <Text style={styles.modalText1}>been sent on your email address.</Text>
              <Pressable
                style={styles.modalButton}
                onPress={handleModal}
              >
                <Text style={styles.modalButtonText}>Reset Password</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <Toast
        config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
      />
    </KeyboardAvoidingView>
  );
};

export default Forgot;


