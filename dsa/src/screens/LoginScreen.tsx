import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import LogoHeader from '../components/LogoHeader';
import LoginInputs from '../components/LoginInputs';

export default function LoginScreen(props) {
  const handleLogin = (username: string, password: string, phoneNumber: string) => {
    console.log('Attempting to log in with:', { username, password, phoneNumber });

    fetch('http://192.168.1.56:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        phoneNumber: phoneNumber
      })
    })
      .then((response) => {
        console.log('Response:', response);
        return response.json();
      })
      .then((data) => {
        console.log('Data:', data);
        if (data.message === 'Login successful') {
          props.route.params.onLoginSuccess();
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <LogoHeader source={require('../../src/images/logo/login-signup_logo.png')} />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../src/images/backgrounds/3d_background.png')}
            style={styles.secondImage}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sizi tanıyalım</Text>
        </View>
        <LoginInputs onLogin={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1D1F3F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#1D1F3F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        },
    logo: {
        width: 100, // Adjust this value for your logo size
        height: 50, // Adjust this value for your logo size
        resizeMode: 'contain',
    },
    imageContainer: {
        marginBottom: 10,
    },
    secondImage: {
        width: 322,
        height: 281,
        resizeMode: 'contain',
    },
    titleContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',

    },


});
