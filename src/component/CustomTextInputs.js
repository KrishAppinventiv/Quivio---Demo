import React, {useState} from 'react';
import {
  View,

  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text
} from 'react-native';
import {Images} from '../assets';
import {colors} from '../theme';
import { Icon, TextInput } from 'react-native-paper';
const CustomTextInputs = ({
  placeholder,
  value,
  onChangeText,
  error,
  icon,
  type,
  sideContent,
  img,
  rightContent,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  

  
  return (
    <View
      style={[
        styles.inputContainer,
        error && {borderColor: colors.red, borderWidth: 1},
      ]}>
      

      {/* <Animated.Text style={placeholderStyle}>{placeholder}</Animated.Text> */}

      <TextInput
        
        label= {placeholder}
        mode='outlined'
        outlineColor='#E7EBF3'
        activeOutlineColor='#a5a8ae'
        outlineStyle={
            {
                backgroundColor:'#ffffff',
                borderRadius:16
            }
        }
       
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        
        secureTextEntry={type === 'password' ? !showPassword : false}
        right={
          rightContent === 'icon' ? (
            <TextInput.Icon
              icon={img}
              onPress={sideContent}
              style={placeholder=="Gender"? styles.gendImg: null}
            />
          ) : rightContent === 'text' ? (
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity onPress={sideContent}>
                  <Text style={styles.verifyText}>Verify</Text>
                </TouchableOpacity>
              )}
            />
          ) : null
        }
      />

     


    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 17,
    marginBottom: 2,
   
    backgroundColor: 'white',
    height:60,
   
  },
  icon: {
    marginRight: 18,
  },
  input: {
    flex: 1,
    fontSize:16,
    alignSelf:'center'
  },
  img2: {
    height: 20,
    width: 20,
    marginEnd: 10,
    
  },
  verifyText:{
      color:'#EE28A9',fontSize:14,fontWeight:'500'
  } ,
  gendImg:{
     height:15,
     width:15
  }
});

export default CustomTextInputs;
