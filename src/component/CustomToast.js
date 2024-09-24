import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Images } from '../assets'


const CustomToast = ({text1}) => {
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
    <Image
    source={Images.exclaimatory}
    style={styles.image}
    />
    </View>
    <Text style={{color:'#FFFFFF',fontWeight:'500',fontSize:'14'}}>{text1}</Text>
  </View>

  )
}

export default CustomToast


const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        paddingVertical:10,
        flexDirection:'row',
        paddingHorizontal:20,
        backgroundColor:'red',
        marginTop:50,
        width:'80%',
        height:50,
        alignItems:'center',
    },
    container2:{
        height:28,
        width:28,
        backgroundColor:'white',
        borderRadius:30,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
        
    },
    image:{
        height:13,
        width:1,
    }

})