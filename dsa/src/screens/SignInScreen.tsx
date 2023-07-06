import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';

const SignInScreen = ({ handleUserLoggedIn }) => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  

  const handleSignIn = () => {
    console.log('Name:', name);
    console.log('Telephone:', telephone);
    console.log('Password:', password);
    handleAuthentication(true);
  };
  

    // try {
    //   const response = await fetch('http://localhost:3000/api/v1/users/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       telephone: telephone,
    //       password: password,
    //     }),
    //   });
  
    //   console.log('Response:', response);
    
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Data:', data);
  
    //     if (data.status === 'success') {
    //       // Authentication successful, navigate to the AppNavigator
    //       console.log('Successfully logged in!');
    //       handleAuthentication(true);
    //     } else {
    //       // Handle other cases here
    //       console.log('Login failed:', data);
    //       Alert.alert('Error', 'An error occurred during login. Please try again.');
    //     }
    //   } else if (response.status === 401) {
    //     // Invalid username or password
    //     console.log('Invalid username or password');
    //     Alert.alert('Error', 'Invalid telephone or password. Please try again.');
    //   } else if (response.status === 404) {
    //     // User not found
    //     console.log('User not found');
    //     Alert.alert('Error', 'User not found. Please check your input and try again.');
    //   } else {
    //     // Some other error occurred
    //     console.log('Unexpected error');
    //     Alert.alert('Error', 'An error occurred. Could not connect to the server. Please try again later.');
    //   }
    // } catch (error) {
    //   console.log('Request error:', error);
    //   Alert.alert('Error', 'An error occurred. Could not connect to the server. Please try again later.');
    // }
  
  
  
  

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
      <Text style={styles.title}>Sizi Tanıyalım</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="İsminiz"
        placeholderTextColor="#603AF5"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Telefon Numaranız"
        placeholderTextColor="#603AF5"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Şifre"
        placeholderTextColor="#603AF5"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleNavigateToSignUp}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Hesabın yok mu? Hemen kayıt ol!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
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