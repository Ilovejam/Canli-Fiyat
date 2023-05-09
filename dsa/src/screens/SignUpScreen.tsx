import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import NewsGeneral from './NewsGeneral';
import LogoHeader from '../components/LogoHeader';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
    const navigation = useNavigation();
    const navigateTo = (screen) => {
        if (screen === 'SignInScreen') {
            navigation.navigate('SignInScreen');
        }
        };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://0.0.0.0:3000/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          telephone: telephone,
          password: password,
          passwordConfirm: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        // Registration successful, do something here, e.g. navigate to the login page
        console.log('Successfully registered!');
        Alert.alert('Success', 'Successfully registered!');
      } else if (response.status === 400) {
        // Invalid input data
        console.log('Invalid input data. Please check your input and try again.');
      } else if (response.status === 409) {
        // User already exists
        console.log('This telephone is already in use. Please choose a different telephone number.');
      } 
    }
    catch (error) {
        console.log(error); // log the error to the console
        console.log('An error occurred. Could not connect to the database. Please try again later.');
    }
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
        onChangeText={text => setName(text)}
        placeholder="İsim"
        placeholderTextColor={"#603AF5"}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={text => setPhoneNumber(text)}
        placeholder="Telefon Numarası"
        placeholderTextColor={"#603AF5"}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Şifre"
        placeholderTextColor={"#603AF5"}

        secureTextEntry
      />
     
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={handleCheckBox}>
          {isChecked && <View style={styles.checkedBox} />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Aydınlatma metnini okudum ve onaylıyorum</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Already have an account? Sign In</Text>
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
      
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      checkbox: {
        height: 20,
        width: 20,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkedBox: {
        backgroundColor: '#3498db',
        height: 14,
        width: 14,
        borderRadius: 3,
      },
      checkboxText: {
        fontSize: 16,
        color: '#333',
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

export default SignUpScreen;
