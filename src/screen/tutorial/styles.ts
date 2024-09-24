import {StyleSheet,Dimensions} from 'react-native';
import {colors, dimension} from '../../theme';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:colors.bg,
      },
      image: {
        width: 200,
        height: 200,
        borderRadius:50
      },
      text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
      },
      carousel: {
        marginTop: 20, 
        
      },

      pagination: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'center',
        height:20,
        backgroundColor:colors.bg
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
      },
      bannerContainerOut: {
        width: screenWidth,
       
        backgroundColor:colors.bg,
        justifyContent:'center',
        alignItems:'center'
      },
      getstarted: {
        height:45,
        backgroundColor:'#2A7BBB',
        width:267,
        borderRadius:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
      },
      buttonText: {
        color:'white',
        fontWeight:'700',
      },
      button: {
        alignItems:'center',
        marginTop:20,
      },
})