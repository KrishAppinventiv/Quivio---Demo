import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';
import {CustomFont} from '../../Fonts';
import {fontFamily} from '../../assets';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
export default StyleSheet.create({
  flatContain: {
    width: 128,
    flexDirection: 'row',
  },
  flatText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: '300',
    fontSize: 14,
  },
  qvText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '800',
    fontFamily: fontFamily.SEMI_BOLD,
  },
  textContain: {
    marginTop: SCREEN_HEIGHT * 0.031,
    marginStart: 30,
  },
  Qp: {
    marginTop: SCREEN_HEIGHT * 0.109,
    height: 55,
    width: 84,
    marginStart: 30,
  },
  PersonalText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  upper: {
    height: SCREEN_HEIGHT * 0.455,
  },

  img: {
    height: 16,
    width: 16,
    marginTop: 10,
  },
  renderContain: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * 0.071,
    marginStart: 30,
  },
  imageContain: {
    marginTop: 50,
    marginStart: 28,
    marginBottom: 40,
  },
  signText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'left',
  },
  textContain1: {
    marginTop: 30,
    marginStart: 35,
  },
  greyText: {
    color: '#4F5F72',
    marginTop: 5,
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'left',
  },
  input: {
    alignItems: 'center',
    padding: 10,
    color: 'black',
    width: '70%',
  },
  inputContainer: {
    height: 63,
    alignItems: 'center',
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  inputContainer1: {
    height: 63,
    marginTop: 30,
    borderRadius: 7,

    backgroundColor: 'white',
    justifyContent: 'center',
  },

  textInputContain: {
    marginHorizontal: 35,
    marginTop: 20,
  },
  touch: {
    marginTop: 15,
    height: 56,
    width: '75%',
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
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginHorizontal: 30,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
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

  introContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#FAF9F6',

    zIndex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
  },
  introText: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 10,

    paddingHorizontal: 10,
  },
  getStartedButton: {
    backgroundColor: '#6495ED',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  getStartedText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  blurBackground: {
    opacity: 0.6,
  },

  signupContainer: {
    flex: 1,
    paddingTop: 50,
  },
  errorContain: {
    height: 65,
    width: 300,
    borderRadius: 7,
    marginStart: 35,
    backgroundColor: '#ffe8e7',

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  redText: {
    color: 'black',
    padding: 10,
    fontSize: 13,
    fontWeight: '400',
  },

  forget: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: 'row-reverse',
    marginEnd: 45,
  },
  forgetText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 13,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
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

  modalText1: {
    marginHorizontal: 35,
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '300',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: 19.5,
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius: 5,
    height: 51,
    width: '40%',
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
  buttonText: {color: 'black'},
});
