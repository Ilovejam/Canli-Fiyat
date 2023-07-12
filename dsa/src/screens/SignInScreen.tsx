import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';

const SignInScreen = ({ handleUserLoggedIn }) => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const telephoneRef = useRef(null);
  const passwordRef = useRef(null);

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
    <ScrollView contentContainerStyle={styles.container}>
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
        placeholder="Kullanıcı adınız"
        placeholderTextColor="#603AF5"
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => telephoneRef.current.focus()}
      />
      <TextInput
        ref={telephoneRef}
        style={styles.input}
        value={telephone}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Telefon Numaranız (5XX XXX XX XX)"
        placeholderTextColor="#603AF5"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Parolanız"
        placeholderTextColor="#603AF5"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleSignIn}
      />
      <TouchableOpacity onPress={handleNavigateToSignUp}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Hesabınız yok mu? Kayıt olun!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 10,
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
