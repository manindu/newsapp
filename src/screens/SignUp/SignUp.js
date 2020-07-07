import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Button} from 'react-native';
import {Input} from '../../components';
import {signUp} from '../../state/user/user.actions';

const SignUp = ({signUpWithEmail, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onPressSignUp = () => {
    signUpWithEmail({email, password});
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="user@gmail.com"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="password"
        value={password}
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />
      <View style={styles.bottomContainer}>
        <Button title="Sign Up" onPress={onPressSignUp} />
      </View>
      <View style={styles.bottomContainer}>
        <Button color="tomato" title="Sign In" onPress={onPressSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: 'tomato',
    width: '90%',
    marginTop: 20,
  },
});
export default connect(null, {signUpWithEmail: signUp})(SignUp);
