import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';

const VerifyUser = ({ handleUserLoggedIn }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();

  const handleVerify = () => {
    // Add your verification logic here
    if (verificationCode === '1234') {
      Alert.alert('Success', 'User successfully verified!');
      handleUserLoggedIn(true); // Set user as logged in
    } else {
      Alert.alert('Error', 'Invalid verification code!');
    }
  };

  console.log('Verification Code:', verificationCode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoHeader />
      </View>
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={setVerificationCode}
          placeholder="Code"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 40,
  },
  codeContainer: {
    marginTop: 40,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#603AF5',
    width: 160,
    height: 40,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 12,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#603AF5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyUser;
