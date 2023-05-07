import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import LogoHeader from "../components/LogoHeader";

export default function VerifyUserScreen() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      const response = await fetch('http://0.0.0.0:3000/api/v1/users/verify-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
        }),
      });
      const data = await response.json();
      console.log('User verified:', data);
    } catch (error) {
      console.error('Error verifying user:', error);
      setError("Verification failed");
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <LogoHeader source={require('../../src/images/logo/login-signup_logo.png')} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter 4-Digit Code</Text>
        </View>
        <View style={styles.codeContainer}>
          <TextInput
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={4}
            value={code}
            onChangeText={setCode}
          />
        </View>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#603AF5',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  codeContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verifyButton: {
    marginTop: 40,
    backgroundColor: '#603AF5',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    marginTop: 20,
    color: '#f00',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
