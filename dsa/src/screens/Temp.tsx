import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const Temp = () => {
  const nameInputRef = useRef<TextInput | null>(null);
  const phoneInputRef = useRef<TextInput | null>(null);
  const passwordInputRef = useRef<TextInput | null>(null);

  const handleNameSubmit = () => {
    phoneInputRef.current?.focus();
  };

  const handlePhoneSubmit = () => {
    passwordInputRef.current?.focus();
  };

  const handlePasswordSubmit = () => {
    // Perform login action here
    console.log('Fuck');
  };

  return (
    <View style={styles.container}>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.loginContainer}
      >
        <View style={styles.inputContainer}>
        <Image
        source={{ uri: 'https://mccontainers.com/wp-content/uploads/2018/04/45-view-r-l.jpg' }}
        style={styles.image}
      />
          <TextInput
            ref={nameInputRef}
            style={styles.input}
            placeholder="Name"
            onSubmitEditing={handleNameSubmit}
            returnKeyType="next"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={phoneInputRef}
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onSubmitEditing={handlePhoneSubmit}
            returnKeyType="done" // Set returnKeyType to "done" to display "Done" on the phone input
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={passwordInputRef}
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onSubmitEditing={handlePasswordSubmit}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handlePasswordSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    backgroundColor: '#fff', // Add a background color for the text input to make it visible
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Temp;
