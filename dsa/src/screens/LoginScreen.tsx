import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoHeader from '../components/LogoHeader';
import FormTextInput from '../components/FormTextInput';

export default function LoginScreen() {
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
            <FormTextInput title="İsminiz" placeholder="" inputType="text" />
            <FormTextInput title="Telefon Numaranız" placeholder="" inputType="phone" />
            <FormTextInput title="Şifre" placeholder="" inputType="password" />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
            
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
    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 111.217,
        paddingVertical: 10.3941,
        marginTop: 20, // Add some margin to separate the button from the input fields
        width: 346.12,
        height: 41.79,
        backgroundColor: '#67BBF9',
        borderRadius: 3.11823,
      },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
      },
      
      
});



