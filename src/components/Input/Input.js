import React from 'react';
import {TextInput} from 'react-native';

const Input = ({value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      value={value}
      style={styles.input}
      onChangeText={onChangeText}
    />
  );
};

const styles = {
  input: {
    width: '90%',
    borderBottomWidth: 1,
  },
};

export default Input;
