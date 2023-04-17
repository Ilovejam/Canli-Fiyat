import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SignUpInputs } from "../components/SignUpInputs";
import Header from "../components/Header";

export default function SignUpScreen() {
    const handleSignUp = async (name: string, phoneNumber: string, password: string) => {
        try {
            const response = await fetch('http://192.168.1.56:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phoneNumber,
                password,
            }),
            });
            const data = await response.json();
            console.log('User data saved:', data);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };
      

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Hesap Oluştur</Text>
      <Text style={styles.text}>
        Hesabınızı açmak için detayları doldurun.
      </Text>
      <SignUpInputs onSignUp={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1F3F",
  },
  text: {
    fontSize: 12.47,
    fontWeight: "bold",
    textAlign: "right",
    color: "#949CA9",
  },
  header: {
    fontSize: 24.95,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#282828",
  },
});
