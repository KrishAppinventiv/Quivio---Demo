import {StyleSheet} from 'react-native';
import {colors, dimension} from '../../theme';

export default StyleSheet.create({
    modalImage: {
        height:50,
        width:50,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D3F7FF',
        opacity:0.8,
      },
      ResendText: {
        color: '#081017',
        fontWeight: '600',
        fontSize: 14,
      },
      Resend: {
        marginTop: 20,
        marginBottom: 25,
        flexDirection: 'row-reverse',
        marginEnd: 45,
      },
      partition: {
        height: 28,
        width: 2,
        backgroundColor: '#E5E8EA',
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
        
        fontSize:15,
        fontWeight:'400'
      },
      numberContain: {
        height: 40,
        width: 240,
        borderRadius: 7,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
    
        padding: 10,
        flexDirection: 'row',
    
        marginLeft: 20,
      },
    
      ccpContain: {
        height: 50,
        width: 50,
        borderRadius: 7,
        borderColor:'#E5E8EA',
        borderRightWidth:1,
        
        backgroundColor: 'white',
    
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 10,
        
      },
      textInput: {
        // height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 8,
      },
      input: {
        alignItems: 'center',
        marginLeft: 20,
        color: 'black',
      },
    
      touch: {
        marginTop: 15,
        height: 40,
        width: 270,
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
    
        color: 'black',
      },
    
      arrowImg: {
        width: 50,
        height: 50,
      },
      errorText: {
        color: 'red',
        marginTop: 10,
       
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContainer: {
        width: "80%",
        
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
      // modalText: {
      //   marginHorizontal:35,
      //   fontSize: 13,
      //   marginBottom: 20,
      //   fontWeight:'300',
      //   alignSelf:'center',
      //   justifyContent:'center',
      //   color:'#4D5876',
      //   lineHeight:19.5
      // },
      modalText1: {
        marginHorizontal:35,
        fontSize: 13,
        textAlign:'center',
        fontWeight:'300',
        alignSelf:'center',
        justifyContent:'center',
        color:'#4D5876',
        lineHeight:19.5,
        marginBottom: 20,
      },
      modalButton: {
        padding: 10,
        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#2A7BBB',
        borderRadius: 5,
        
       
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
})