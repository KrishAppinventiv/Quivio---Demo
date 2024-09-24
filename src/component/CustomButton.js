import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: disabled ? 0.2 : 1}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    height: 56,
    // width: '75%',
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
});

export default CustomButton;
