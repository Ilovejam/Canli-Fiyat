
  
  import React, { useState } from 'react';
  import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
  import { useNavigation, useRoute } from '@react-navigation/native';
  import LogoHeader from '../components/LogoHeader';
  
  const VerifyUser = ({ handleUserLoggedIn }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [verificationCode, setVerificationCode] = useState(initialVerificationCode || '');

    const { verificationCode: initialVerificationCode } = route.params;
  
    // Define states for each TextInput
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
  
    const handleVerify = () => {
      const enteredCode = digit1 + digit2 + digit3 + digit4; // Concatenate all inputs
      if (enteredCode === initialVerificationCode) {
        Alert.alert('Success', 'User successfully verified!');
        handleUserLoggedIn(true); // Set user as logged in
      } else {
        Alert.alert('Error', 'Invalid verification code!');
      }
    };
  
    console.log('Verification Code:', initialVerificationCode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoHeader />
      </View>
      <View style={styles.codeContainer}>
        <View style={styles.codeRow}>
          <TextInput
            style={styles.codeInput}
            value={verificationCode[0]}
            onChangeText={(text) => {
              setVerificationCode(text + verificationCode.slice(1));
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            value={verificationCode[1]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 1) + text + verificationCode.slice(2));
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            value={verificationCode[2]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 2) + text + verificationCode.slice(3));
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            value={verificationCode[3]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 3) + text);
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
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
  codeRow: {
    flexDirection: 'row',
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#603AF5',
    width: 40,
    height: 40,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 12,
    marginRight: 8,
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
