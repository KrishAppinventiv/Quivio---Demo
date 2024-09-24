import {StyleSheet,Dimensions} from 'react-native';
import {colors, dimension} from '../../theme';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
export default StyleSheet.create({
    allText: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 15,
        color: '#23679D',
      },
      allProductIcon: {
        flexDirection:'row',
      },
      recentText: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 15,
        color: '#525454',
      },
      mainPartition: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      frequentText: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 15,
        color: '#525454',
      },
      frequentlyText: {
        marginHorizontal: 20,
        marginTop: 20,
      },
      continueText: {
        fontSize: 13,
        fontWeight: '400',
        marginTop: 5,
        color: '#60707D',
        lineHeight: 16.9,
      },
      setupText: {
        fontSize: 15,
        fontWeight: '700',
      },
      textContain: {
        marginStart: 20,
      },
      settingImg: {
        height: 36,
        width: 36,
      },
      partitionSetup: {
        marginHorizontal: 20,
        flexDirection: 'row',
      },
      accountSetup: {
        height: 74,
        marginHorizontal: 20,
        backgroundColor: '#eaeff7',
        marginTop: 30,
        justifyContent: 'center',
        borderRadius:8,
        shadowOpacity:0.1
      },
      bellImg: {
        height: 40,
        width: 40,
        backgroundColor: '#FFFFFF1A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      messageImg: {
        height: 40,
        width: 40,
        backgroundColor: '#FFFFFF1A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
      },
      ImageContainer: {
        flexDirection: 'row',
        marginTop: 10,
      },
      kevinText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 26,
        color: '#FFFFFF',
      },
      welcomeText: {
        fontWeight: '300',
        fontSize: 18,
        lineHeight: 26,
        color: '#FFFFFF',
      },
      partition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 56,
        marginHorizontal: 20,
      },
      blueContain: {
        height: 125,
        backgroundColor: '#2A7BBB',
      },
      instructImg: {
        height: 57,
        width: 57,
        marginTop: 5,
      },
      instructionPoint: {
        flexDirection: 'row',
    
        alignItems: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#f2f6f9',
      },
    
      introContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop:32,
        // height: SCREEN_HEIGHT*0.8099,
        backgroundColor: colors.bg,
       paddingBottom:20,
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
    
      content: {
        marginStart: 30,
        marginTop: 20,
        marginEnd: 30,
      },
    
      instructionText: {
        paddingHorizontal: 12,
        color: '#122636',
        fontSize: 14,
        fontWeight: '600',
      },
      instructionsText: {
        paddingHorizontal: 12,
        color: '#122636',
        fontSize: 15,
        fontWeight: '300',
      },
      instruction: {
        marginTop: 17,
        marginBottom: 10,
      },
      touch: {
        marginTop: 15,
        height: 56,
    
        backgroundColor: '#2A7BBB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      img: {},
      renderContain: {
       
        marginHorizontal: 13,
        backgroundColor: 'white',
        
       
        borderRadius: 5,
      },
      renderContains: {
        
        marginHorizontal: 18,
    
        backgroundColor: 'white',
       
       borderBottomWidth:1,
       borderBottomColor:'#0000000F',
        borderRadius: 8,
      },
      flatContain: {
        padding: 13,
        marginHorizontal:5,
        flexDirection: 'row',
        paddingBottom:15
      },
      flatContains: {
        padding: 25,
        flexDirection: 'row',
        paddingBottom:15
        
      },
      flatText: {
        marginTop: 3,
        paddingLeft: 10,
        fontSize:13,
        fontWeight:'600',
        color:'#0E1F2C'
      },
      flatText1: {
        marginTop: 3,
        paddingLeft: 20,
        fontSize:14,
        fontWeight:'600',
        color:'#0E1F2C',
        
      },
      flatText2: {
        marginTop: 6,
        paddingLeft: 20,
        fontSize:12,
        fontWeight:'500',
        color:'#85929C'
      },
      flatpartition: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#23679D1A',
        justifyContent: 'center',
        alignItems: 'center',
      },
      flatlist:{
        marginTop:15,
        paddingBottom:15,
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },

      imgStarter: {
        alignSelf: 'center',
      
        width:SCREEN_WIDTH*0.282,
        height:SCREEN_HEIGHT*0.173
      },
})