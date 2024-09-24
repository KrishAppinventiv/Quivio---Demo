import {StyleSheet} from 'react-native';
import {colors, dimension} from '../../theme';

export default StyleSheet.create({
    arrowImg: {
        width: 50,
        height: 50,
      },
    
      container: {
        flex: 1,
        backgroundColor: colors.bg,
      },
      textContainer: {
        marginStart: 25,
        marginTop: 60,
      },
      headText: {
        fontSize: 24,
        marginBottom: 12,
        fontWeight: '700',
      },
      greyText: {
        color: '#4F5F72',
        width: 280,
        fontSize: 15,
        fontWeight: '300',
      },
      numberContain: {
        height: 60,
        width: '70%',
        borderRadius: 7,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    
        marginLeft: 20,
      },
    
      ccpContain: {
        height: 60,
        width: 60,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        flexDirection: 'row',
        marginStart: 27,
        marginTop: 30,
      },
      input: {
        alignItems: 'center',
        marginLeft: 20,
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
      },
    
      touch: {
        marginTop: 15,
        height: 40,
    
        backgroundColor: '#6495ED',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      text: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
      },
      touchContain: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        marginHorizontal: 30,
      },
    
      greyContain: {
        marginTop: 20,
        marginStart: 20,
        borderRadius: 7,
      },
      countryCodeText: {
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContainer: {
        marginHorizontal:34,
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
        marginHorizontal:40,
        fontSize: 13,
        marginBottom: 20,
        fontWeight: '300',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#4D5876',
        lineHeight: 19.5,
      },
      modalButton: {
        paddingVertical: 10,
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A7BBB',
        borderRadius: 5,
        height: 51,
        width: '40%',
      },
      modalButton1: {
        paddingVertical: 10,
       marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F7F7',
        borderRadius: 5,
        height: 51,
        width: '40%',
      },
      modalButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
      },
      modalButtonText1: {
        color: 'black',
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