import {StyleSheet} from 'react-native';
import {colors, dimension} from '../../theme';

export default StyleSheet.create({
    genderText: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        padding: 20,
      },
      genderContain: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E9EE',
        flexDirection: 'row',
        paddingVertical: 20,
      },
      calendarstyle: {
        borderRadius: 10,
      },
      calendar: {
        padding: 30,
      },
      profileText: {
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 20,
      },
      profileContain: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E9EE',
      },
      updateButton: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
      },
      changePhoto: {
        fontSize: 16,
        fontWeight: '500',
        color: '#EE28A9',
        marginTop: 10,
      },
      pictureText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4B5879',
      },
      pictureView: {
        alignSelf: 'center',
        marginLeft: 20,
      },
      profile: {
        width: 130,
        height: 130,
        borderRadius: 100,
      },
      photoImg: {
        backgroundColor: '#E7EBF3',
        borderRadius: 70,
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
      },
      photoContain: {
        marginTop: 30,
        flexDirection: 'row',
        marginLeft: 30,
      },
      editText: {
        fontSize: 20,
        fontWeight: '500',
      },
      headContain: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22,
      },
      container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
    
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
      },
      introContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 20,
        paddingBottom: 20,
    
        // height: SCREEN_HEIGHT*0.8099,
        backgroundColor: '#ffffff',
    
        // zIndex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
      },
      introContainers: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 10,
        // height: SCREEN_HEIGHT*0.8099,
        backgroundColor: '#F6F9FA',
    
        // zIndex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
      },
      textInputContain: {
        marginHorizontal: 35,
        marginTop: 20,
      },
      numberContain: {
        height: 60,
        width: '70%',
        borderRadius: 7,
        borderColor: '#E7EBF3',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    
        marginLeft: 20,
      },
    
      ccpContain: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        borderColor: '#E7EBF3',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        flexDirection: 'row',
    
        marginTop: 30,
      },
      countryCodeText: {
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
      },
      input: {
        alignItems: 'center',
        marginLeft: 20,
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContainer: {
        marginHorizontal:30,
       
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalheading: {
        fontSize: 20,
        marginBottom:5,
        marginTop:15,
        fontWeight:'700',
        lineHeight:26
      },
      modalText: {
        marginHorizontal:37,
        fontSize: 13,
      
        fontWeight:'400',
        textAlign:'center',
        justifyContent:'center',
        color:'#4D5876',
        lineHeight:19.5,
        marginBottom:20,
      },
      touchContain: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        marginHorizontal: 30,
        marginTop:20
      },

      modalButton: {
        paddingVertical: 10,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#2A7BBB',
        borderRadius: 5,
        height:51,
       
      },
      modalButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight:'600'
      },
      containerThree:{
        flexDirection:'row',
        // borderWidth:1,
        backgroundColor:'#F8F9F9',
        marginTop:20,
        height:60,
        padding:15,
      },
      modalVerify: {
        
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3F7FF',
        opacity: 0.5,
      },
})