import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';

const SignInScreen = ({handleAuthentication}) => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://0.0.0.0:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telephone: telephone,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.status === 'success') {
        // Authentication successful, navigate to the AppNavigator
        console.log('Successfully logged in!');
        handleAuthentication(true);
        } else if (response.status === 401) {
        // Invalid username or password
        handleAuthentication(true);
        Alert.alert('Error', 'Invalid telephone or password. Please try again.');
      } else if (response.status === 404) {
        // User not found
        handleAuthentication(true);
        Alert.alert('Error', 'User not found. Please check your input and try again.');
      } else {
        // Some other error occurred
        handleAuthentication(true);
        Alert.alert('Error', 'An error occurred. Could not connect to the database. Please try again later.');
      }
    } catch (error) {
      console.log(error); // log the error to the console
      Alert.alert('Error', 'An error occurred. Could not connect to the database. Please try again later.');
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
      <Text style={styles.title}>Sizi Tanıyalım</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="İsminiz"
        placeholderTextColor={"#603AF5"}
        keyboardType="phone-pad" // use phone-pad keyboardType
      />
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Telefon Numaranız"
        placeholderTextColor={"#603AF5"}
        keyboardType="phone-pad" // use phone-pad keyboardType
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Şifre"
        placeholderTextColor={"#603AF5"}
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
    fontFamily: 'Poppins',
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
