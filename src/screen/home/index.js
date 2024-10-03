import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import strings from '../../utils/string';
import {ScreenNames} from '../../navigator/screenNames';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme';
import {Images} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import CustomFlatList from '../../component/CustomFlatList';

const Home = () => {
  const navigation = useNavigation();
  const [showIntro, setShowIntro] = useState(true);
  const [modalVisible, setmodalVisible] = useState(true);

  useEffect(() => {
    const checkIntroStatus = async () => {
      const introShown = await AsyncStorage.getItem('showIntro');
      if (introShown === 'false') {
        setmodalVisible(false);
      }
    };

    checkIntroStatus();
  }, []);

  const data = [
    {
      img: Images.speaker,
      text: 'Create',
      text2: 'Campaign',
    },
    {
      img: Images.time,
      text: 'One Time',
      text2: 'Trigger',
    },
    {
      img: Images.speaker,
      text: 'Create',
      text2: 'Campaign',
    },
    {
      img: Images.time,
      text: 'One Time',
      text2: 'Trigger',
    },
  ];

  const data1 = [
    {
      text: 'Successfully configured POS for sites',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'You ended the campaign Holiday Special',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'Created a campaign Holiday Special',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'Activated the user access group named Site manager',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'Added a discount code to a campaign named Holiday Special',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'Added a new customer C02039',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
    {
      text: 'Activated the user access group named Site Managers',
      text2: 'Jun 3, 2023 | 12:30 PM',
    },
  ];

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.reset({
        index: 0,
        routes: [{name: 'Sign'}],
      });
    } catch (error) {
      console.error('Error clearing login status', error);
    }
  };

  const handleOverlayPress = () => {
    setmodalVisible(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.renderContain}>
      <View style={styles.flatContain}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: colors.lightgreen,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={item.img} style={styles.img} />
        </View>
        <View>
          <Text style={styles.flatText}>{item.text}</Text>
          <Text style={styles.flatText}>{item.text2}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem1 = ({item}) => (
    <View style={styles.renderContains}>
      <View style={styles.flatContains}>
        <View style={styles.flatpartition}>
          <Image source={Images.users} style={styles.img} />
        </View>
        <View>
          <Text style={styles.flatText1}>{item.text}</Text>
          <Text style={styles.flatText2}>{item.text2}</Text>
        </View>
      </View>
    </View>
  );

  const handleNavigate = () => {
    setmodalVisible(false);
    navigation.navigate(ScreenNames.AddPhone);
  };
  return (
    <View style={styles.container}>
      <View style={styles.blueContain}>
        <View style={styles.partition}>
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.kevinText}>Kelvin</Text>
          </View>
          <View style={styles.ImageContainer}>
            <TouchableOpacity>
              <View style={styles.messageImg}>
                <Image source={Images.message} />
              </View>
            </TouchableOpacity>
            <View style={styles.messageImg}>
              <Image source={Images.bell} />
            </View>

            <TouchableOpacity onPress={handleLogout}>
              <View style={styles.bellImg}>
                <Image
                  source={Images.logouted}
                  style={{height: 20, width: 20}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.accountSetup}>
          <View style={styles.partitionSetup}>
            <Image source={Images.setting} style={styles.settingImg} />
            <View style={styles.textContain}>
              <Text style={styles.setupText}>Complete your account setup</Text>
              <Text style={styles.continueText}>Tap to continue</Text>
            </View>
          </View>
        </View>

        <View style={styles.frequentlyText}>
          <Text style={styles.frequentText}>FREQUENTLY USED</Text>
        </View>

        <CustomFlatList data={data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
      </View>
      <View style={styles.mainPartition}>
        <Text style={styles.recentText}>RECENT ACTIVITES</Text>
        <View style={styles.allProductIcon}>
          <Text style={styles.allText}>All Product</Text>
          <TouchableOpacity>
            <Image
              source={Images.smallarrow}
              style={{marginTop: 5, marginLeft: 4}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <CustomFlatList 
      data={data1} 
      renderItem={renderItem1}
      showsVerticalScrollIndicator={false}
      />

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(false);
        }}>
        <Pressable style={styles.modalOverlay} onPress={handleOverlayPress}>
          <View style={styles.introContainer}>
            <View>
              <Image
                source={Images.SecureImg}
                style={styles.imgStarter}
                resizeMode="contain"
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.introText}>Secure your Account ?</Text>

              <Text style={styles.instructionsText}>
                Setup two factor authentication to secure your account in just
                two steps.
              </Text>
              <View style={styles.instruction}>
                <View style={styles.instructionPoint}>
                  <Image
                    source={Images.linkaccount}
                    style={styles.instructImg}
                  />
                  <Text style={styles.instructionText}>
                    Link your account with your phone number
                  </Text>
                </View>

                <View style={styles.instructionPoint}>
                  <Image source={Images.passcode} style={styles.instructImg} />
                  <Text style={styles.instructionText}>
                    Enter the one-time passcode
                  </Text>
                </View>
                <View style={styles.instructionPoint}>
                  <Image source={Images.secure} style={styles.instructImg} />
                  <Text style={styles.instructionText}>
                    Secure your account
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.touch} onPress={handleNavigate}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Home;
