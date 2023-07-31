import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const VerifyUser = ({ handleUserLoggedIn }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [verificationCode, setVerificationCode] = useState(initialVerificationCode || '');

  const { verificationCode: initialVerificationCode } = route.params;

  const digit2Ref = useRef<TextInput>(null);
  const digit3Ref = useRef<TextInput>(null);
  const digit4Ref = useRef<TextInput>(null);

  const handleVerify = () => {
    const enteredCode = verificationCode;
    if (enteredCode === initialVerificationCode) {
      Alert.alert('Success', 'User successfully verified!');
      handleUserLoggedIn(true); // Set user as logged in
    } else {
      Alert.alert('Error', 'Invalid verification code!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoHeader />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
        <FontAwesomeIcon icon={faArrowLeft} size={25} color="#000" />
      </TouchableOpacity>

      <View style={styles.codeContainer}>
        <View style={styles.codeRow}>
          <TextInput
            style={styles.codeInput}
            value={verificationCode[0]}
            onChangeText={(text) => {
              setVerificationCode(text + verificationCode.slice(1));
              if (text !== '') digit2Ref.current?.focus();
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
            returnKeyType="next"
            onSubmitEditing={() => digit2Ref.current?.focus()}
          />
          <TextInput
            ref={digit2Ref}
            style={styles.codeInput}
            value={verificationCode[1]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 1) + text + verificationCode.slice(2));
              if (text !== '') digit3Ref.current?.focus();
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
            returnKeyType="next"
            onSubmitEditing={() => digit3Ref.current?.focus()}
          />
          <TextInput
            ref={digit3Ref}
            style={styles.codeInput}
            value={verificationCode[2]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 2) + text + verificationCode.slice(3));
              if (text !== '') digit4Ref.current?.focus();
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
            returnKeyType="next"
            onSubmitEditing={() => digit4Ref.current?.focus()}
          />
          <TextInput
            ref={digit4Ref}
            style={styles.codeInput}
            value={verificationCode[3]}
            onChangeText={(text) => {
              setVerificationCode(verificationCode.slice(0, 3) + text);
            }}
            placeholder="Code"
            keyboardType="numeric"
            maxLength={1}
            returnKeyType="done"
            onSubmitEditing={handleVerify}
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
  goBackIcon: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 999, // To ensure it's above other elements
  },
});

export default VerifyUser;
