import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import NewsGeneral from './NewsGeneral';
import LogoHeader from '../components/LogoHeader';
import VerifyUser from './VerifyUser';


import axios from 'axios';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState('');

  const telephoneRef = useRef(null);
  const passwordRef = useRef(null);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://gateway.albforex.com.tr/api/v1/gateway/createleadmobile', {
        PhoneNumber: telephone,
        firstname: name,
        password: password,
        lastname: 'test',
        country: 'Turkey',
        language: 'tr',
        "email": "test@alb.com.tr",
        "isSendVerificationCode": true,
        "ipAddress": "string",
        "partnerId": 0,
        "deskId": 0,
        "teamId": 0,
        "agentId": 0,
        "utm": {
          "source": "string",
          "medium": "string",
          "campaign": "string",
          "term": "string",
          "content": "string"
        },
        "device": {
          "deviceType": "string",
          "browser": "string",
          "engine": "string",
          "platform": "string",
          "version": "string"
        }
      });
  
      console.log('Response:', response.data); // Add this line to check the response data object
  
      if (response.data?.success) {
        console.log('Successfully registered!');
        Alert.alert('Mesaj', 'Kodunuz hazır!');
        console.log('Verification Code:', response.data.payload?.code); // Add this line to check the verification code
        navigation.navigate('VerifyUser', {verificationCode});
      } else {
        console.log('An error occurred during registration.');
        Alert.alert('Error', 'An error occurred during registration.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'An error occurred. Could not connect to the server. Please try again later.');
    }
  };
  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      switch (nativeEvent.target) {
        case 'name':
          telephoneRef.current.focus();
          break;
        case 'telephone':
          passwordRef.current.focus();
          break;
        case 'password':
          handleSignUp();
          break;
        default:
          break;
      }
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
        placeholder="Kullanıcı Adınız"
        placeholderTextColor={"#603AF5"}
        autoCapitalize="words"
        returnKeyLabel='next'
        onSubmitEditing={() => { this.secondTextInput.focus(); }}
        onKeyPress={handleKeyPress}
        nativeID='name'
      />

        <TextInput
          ref={telephoneRef}
          style={styles.input}
          value={telephone}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Telefon numaranız +90 olmadan giriniz"
          placeholderTextColor={"#603AF5"}
          keyboardType="phone-pad"
          returnKeyLabel='next'
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          onKeyPress={handleKeyPress}
          nativeID='telephone'
          />

      <TextInput
        ref={telephoneRef}

        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Parolanız"
        placeholderTextColor={"#603AF5"}

        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleSignUp}
        onKeyPress={handleKeyPress}
        nativeID="password"
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Hesabın var mı? Giriş yap!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
     
     
     
    </View>
  );
};

const styles = StyleSheet.create({
      phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      codeText: {
        fontSize: 18,
        marginRight: -25,
      },
      phoneInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      },
  
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
