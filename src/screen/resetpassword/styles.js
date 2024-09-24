import {StyleSheet} from 'react-native';
import {colors, dimension} from '../../theme';

export default StyleSheet.create({
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
        // flex: 1,
        // justifyContent: 'flex-end',
        paddingBottom: 20,
        marginHorizontal: 30,
        // marginTop: 'auto',
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
})