import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormTextInput } from "./FormTextInput";

interface ILoginInputsProps {
  onLogin: (username: string, password: string, phoneNumber: string) => void;
}

export const LoginInputs = (props: ILoginInputsProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handleLogin = () => {
    props.onLogin(username, password, phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Adı</Text>
      <FormTextInput
        placeholder="Kullanıcı adınızı girin"
        title=""
        value={username}
        inputType="text"
        onChangeText={handleUsernameChange}
      />
      <Text style={styles.title}>Şifre</Text>
      <FormTextInput
        placeholder="Şifrenizi girin"
        title=""
        value={password}
        inputType="password"
        onChangeText={handlePasswordChange}
      />
      <Text style={styles.title}>Telefon Numarası</Text>
      <FormTextInput
        placeholder="Telefon numaranızı girin"
        title=""
        value={phoneNumber}
        inputType="phone-pad"
        onChangeText={handlePhoneNumberChange}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#67BBF9",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#00825A",
    padding: 16,
    borderRadius: 3.12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16.63,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginInputs;
