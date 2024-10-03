import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomView from '../../component/CustomView';
import validator from 'validator';
import {Images} from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import CustomTextInputs from '../../component/CustomTextInputs';
import {ScrollView} from 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';
import CustomButton from '../../component/CustomButton';

const Profile = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalVisible1, setmodalVisible1] = useState(false);
  const [modalVisible2, setmodalVisible2] = useState(false);
  const [modalVisible3, setmodalVisible3] = useState(false);
  const [Phone, SetPhone] = useState('');
  const [Email, SetEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [emailError, setEmailError] = useState('');
  const [country, setCountry] = useState(null);
  const [errorPhone, setErrorphone] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [imgUri, SetImgUri] = useState(false);
  const [url, setUrl] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const handleOverlayPress = () => {
    setmodalVisible(false);
  };
  const handleOverlayPresss = () => {
    setmodalVisible1(false);
  };
  const handleOverlay = () => {
    setmodalVisible2(false);
  };
  const genderSet = text => {
    setGender(text);
    setmodalVisible2(false);
  };
  const handleSelectCountry = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const validateUsername = (username) => {
    const lowerCaseUsername = username.toLowerCase();
    const hasAtSymbol = lowerCaseUsername.includes('@');
    const isLongEnough = lowerCaseUsername.length >= 6;
  
    if (!hasAtSymbol) {
      setUsernameError('Username must contain an "@" symbol.');
      return false;
    }
    if (!isLongEnough) {
      setUsernameError('Username must be at least 6 characters long.');
      return false;
    }
    if (lowerCaseUsername !== username) {
      setUsernameError('Username must be in lowercase.');
      return false;
    }
  
    setUsernameError(''); 
    return true;
  };
  const handleUploadFromGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image URI: ', response.assets[0].uri);
        setUrl(response.assets[0].uri);
        SetImgUri(true);
      }
    });
  };

  const handleUseCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        console.log('Camera Image URI: ', response);
        setUrl(response.assets[0].uri);
        SetImgUri(true);
      }
    });
  };

  const handleTextChange = (text, field) => {
    if (field === 'email') {
      SetEmail(text);
      validateEmail(text);
    } else if (field === 'name') {
      setName(text);
    } else if (field === 'username') {
      setUsername(text);
      validateUsername(text);
    } else if (field === 'birthday') {
      setBirthday(text);
    } else if (field === 'gender') {
      setGender(text);
    } else if (field === 'phone') {
      SetPhone(text);
      if (text.length !== 10) {
        setErrorphone(true);
      } else {
        setErrorphone(false);
      }
    }
  };

  const visible = () => {
    setmodalVisible1(true);
  };

  const onDateSelect = day => {
    setBirthday(day.dateString);
    setmodalVisible1(false);
  };

  const validateEmail = email => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid Email format');
      return false;
    } else {
      setEmailError('');
    }

    return true;
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headContain}>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        <View style={styles.photoContain}>
          <View style={styles.photoImg}>
            {imgUri === false ? (
              <Image source={Images.profile} resizeMode="contain" />
            ) : (
              <Image
                source={{uri: url}}
                style={styles.profile}
                resizeMode="contain"
              />
            )}
            {/* <Image source={Images.profile} resizeMode="contain" /> */}
          </View>

          <View style={styles.pictureView}>
            <Text style={styles.pictureText}>Profile Picture</Text>
            <TouchableOpacity onPress={() => setmodalVisible(true)}>
              <Text style={styles.changePhoto}>Change Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textInputContain}>
          <CustomTextInputs
            value={name}
            placeholder="Name"
            onChangeText={text => handleTextChange(text, 'name')}
          />

          <CustomTextInputs
            value={username}
            placeholder="Username"
            onChangeText={text => handleTextChange(text, 'username')}
          />

{usernameError && <Text style={{ color: 'red' }}>{usernameError}</Text>}
          <CustomTextInputs
            value={birthday}
            placeholder="Birthday"
            onChangeText={text => handleTextChange(text, 'birthday')}
            type="Birthday"
            sideContent={visible}
            rightContent="icon"
            img={Images.calendar}
          />
          <CustomTextInputs
            value={gender}
            placeholder="Gender"
            onChangeText={text => handleTextChange(text, 'gender')}
            sideContent={() => setmodalVisible2(true)}
            rightContent="icon"
            img={Images.downarrow}
          />

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

              <View>
                {country == null ? (
                  <Text style={styles.countryCodeText}>+1</Text>
                ) : (
                  <Text style={styles.countryCodeText}>
                    +{country.callingCode[0]}
                  </Text>
                )}
              </View>
            </View>
            <View
              style={[
                styles.numberContain,
                errorPhone && {borderColor: 'red', borderWidth: 1},
              ]}>
              <TextInput
                placeholder="Phone Number"
                style={styles.input}
                value={Phone}
                placeholderTextColor="#60707D"
                onChangeText={text => handleTextChange(text, 'phone')}
              />

{errorPhone && <Text style={{ color: 'red' }}>{errorPhone}</Text>}
            </View>
          </View>

          <CustomTextInputs
            value={Email}
            placeholder="Email ID"
            onChangeText={text => handleTextChange(text, 'email')}
            sideContent={() => {
              if(validateEmail(Email)){
                setmodalVisible3(true)
              }
              
            }}
            type="Email"
            rightContent="text"
          />

{emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
        </View>
        <View style={styles.touchContain}>
        <CustomButton
            title="Update"
            buttonstyle={{backgroundColor:'#000080'}}
            textStyle={styles.buttonText}
            disabled={!(Email && name && username && gender && birthday && Phone && !emailError && !errorPhone && usernameError)}
          />

</View>

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setmodalVisible(false);
          }}>
          <Pressable style={styles.modalOverlay} onPress={handleOverlayPress}>
            <View style={styles.introContainer}>
              <View style={styles.profileContain}>
                <Text style={styles.profileText}>Profile Photo</Text>
              </View>

              <TouchableOpacity onPress={handleUploadFromGallery}>
                <CustomView
                  mainImg={Images.gallery}
                  ImgText="Upload from Gallery"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleUseCamera}>
                <CustomView mainImg={Images.camera} ImgText="Use Camera" />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomView
                  mainImg={Images.avatar}
                  ImgText="Select an Avatar"
                />
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        <Modal animationType="fade" transparent={true} visible={modalVisible1}>
          <Pressable style={styles.modalOverlay} onPress={handleOverlayPresss}>
            <View style={styles.calendar}>
              <Calendar
                onDayPress={onDateSelect}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: 'blue',
                  },
                }}
                style={styles.calendarstyle}
              />
            </View>
          </Pressable>
        </Modal>

        <Modal
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setmodalVisible2(false);
          }}>
          <Pressable style={styles.modalOverlay} onPress={handleOverlay}>
            <View style={styles.introContainers}>
              <TouchableOpacity
                onPress={() => {
                  setGender('Male');
                  setmodalVisible2(false);
                }}>
                <View style={styles.genderContain}>
                  <Image source={Images.male} style={{height: 50, width: 50}} />
                  <Text style={styles.genderText}>Male</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setGender('Female');
                  setmodalVisible2(false);
                }}>
                <View style={styles.genderContain}>
                  <Image
                    source={Images.female}
                    style={{height: 50, width: 50}}
                  />
                  <Text style={styles.genderText}>Female</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => setmodalVisible3(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View
                style={styles.modalVerify}>
                <Image source={Images.Link} />
              </View>
              <Text style={styles.modalheading}>Link Sent !</Text>
              <Text style={styles.modalText}>
                The link to verify your email has been sent on your email address.
              </Text>
             
              <Pressable style={styles.modalButton} onPress={() => setmodalVisible3(false)}>
                <Text style={styles.modalButtonText}>Okay</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;



