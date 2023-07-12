import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';

const SignInScreen = ({ handleUserLoggedIn }) => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Perform your login logic here
    // Replace the following code with your actual login implementation
    if (name === '' || telephone === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      // Simulating successful login
      const user = {
        name: name,
        telephone: telephone,
      };
      handleUserLoggedIn(user);
    }
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoHeader />
      </View>
      <Image
        source={require('../images/backgrounds/3d_background.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Let's Get to Know You</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Your Name"
        placeholderTextColor="#603AF5"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Phone Number"
        placeholderTextColor="#603AF5"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#603AF5"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleNavigateToSignUp}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Don't have an account? Sign up now!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22.9,
    fontFamily: 'Poppins-Regular',
    color: '#603AF5',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  header: {
    top: 10,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#9378FD',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#603AF5',
    padding: 10,
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;