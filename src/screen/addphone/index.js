import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {colors} from '../../theme';
import CustomButton from '../../component/CustomButton';
import {Images} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenNames} from '../../navigator/screenNames';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import CustomToast from '../../component/CustomToast';
import styles from './styles';

const Addphone = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [Phone, SetPhone] = useState('');
  const [country, setCountry] = useState(null);
  const [modalVisible, setmodalVisible] = useState(false)
  const[Error,SetError] = useState(false)
  const navigation = useNavigation();
  const handleSubmit = () => {
      console.log(Phone.length)
    if (Phone.length !== 10) {
      
      Toast.show({
        text1: 'Invalid Phone Number',
        type: 'custom_error',
      });
      SetError(true)
      return;
    }else{
      SetError(false)
   
      navigation.navigate(ScreenNames.VerifyOtp);
    }

   
  };
  const handleSelectCountry = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const handleModal = () => {
    setmodalVisible(false);
    navigation.navigate(ScreenNames.Sign);
  };
  const handleTextChange =(text)=>{
    SetPhone(text)
    if (text.length !== 10) {
        SetError(true)
    }else{
     
     SetError(false)
    }
     
  }

  return (

    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
    <SafeAreaView style={styles.container}>
      <View style={styles.greyContain}>
        <TouchableOpacity onPress={()=>setmodalVisible(true)}>
        <Image source={Images.backarrow} style={styles.arrowImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>Add Phone Number</Text>

        <Text style={styles.greyText}>
          To initiate the two-factor authentication, provide your phone number
          below
        </Text>
      </View>
      <View style={styles.textInput}>
        <View style={styles.ccpContain}>
          <View>
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              onSelect={handleSelectCountry}
            
              countryCode={countryCode}
            />
          </View>
        </View>
        <View style={[styles.numberContain, Error && { borderColor: 'red', borderWidth: 1 }]}>
          
          <View>
            {country == null ? (
              <Text style={styles.countryCodeText}>+1</Text>
            ) : (
              <Text style={styles.countryCodeText}>
                +{country.callingCode[0]}
              </Text>
            )}
          </View>

          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            value={Phone}
            placeholderTextColor="#60707D"
            onChangeText={text => handleTextChange(text)}
          />
        </View>
      </View>

      <View style={styles.touchContain}>
        <CustomButton title="Send Code" onPress={handleSubmit} disabled={!(Phone && !Error)}/>
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
              <Image source={Images.logout} />
            </View>
            <Text style={styles.modalheading}>Exit 2FA?</Text>
            <Text style={styles.modalText}>
            Are you sure you want to exit 2FA, You will need to redo it again.
            </Text>
            <View style={{flexDirection:'row'}}>
            <Pressable
              style={styles.modalButton1}
              onPress={() => setmodalVisible(false)}>
              <Text style={styles.modalButtonText1}>No, Continue</Text>
            </Pressable>

            <Pressable
              style={styles.modalButton}
              onPress={handleModal}>
              <Text style={styles.modalButtonText}>Yes, Exit</Text>
            </Pressable>
            </View>
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

export default Addphone;

