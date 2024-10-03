import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Images} from '../assets';
import {colors} from '../theme';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  error,
  icon,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isFocused, setIsFocused] = useState(false);
  const animatedPlaceholder = useState(new Animated.Value(0))[0];

  const handleFocus = () => {
    Animated.timing(animatedPlaceholder, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (value === '') {
      Animated.timing(animatedPlaceholder, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const placeholderStyle = {
    position: 'absolute',
    left: 44,
    fontSize:14,
    top: animatedPlaceholder.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 4],
    }),
    fontSize: animatedPlaceholder.interpolate({
      inputRange: [0, 8],
      outputRange: [13, 12],
    }),
    color: error ? colors.red : colors.textGrey,
  };
  return (
    <View
      style={[
        styles.inputContainer,
        error && {borderColor: colors.red, borderWidth: 1},
      ]}>
      {icon && (
        <Image
          source={icon}
          style={styles.icon}
          tintColor={error ? colors.red : colors.lightgreen}
        />
      )}

      <Animated.Text style={placeholderStyle}>{placeholder}</Animated.Text>

      <TextInput
        placeholder=""
        placeholderTextColor="transparent"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={type === 'password' ? !showPassword : false}
      />

      {icon == Images.pass ? (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image source={Images.eye} style={styles.img2} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 7,
    marginBottom: 2,
    padding: 10,
    backgroundColor: 'white',
    height: 66,
    borderWidth:1,
    borderColor:'#E7EBF3'
  },
  icon: {
    marginRight: 18,
  },
  input: {
    flex: 1,
    fontSize:16
  },
  img2: {
    height: 20,
    width: 20,
    marginEnd: 10,
    alignItems: 'center',
  },
});

export default CustomTextInput;
