import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormTextInput } from "../components/FormTextInput";
import PhoneNumberInput from "../components/PhoneNumberInput";

export default function SignUpScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSignUp = () => {
    // send the data to the backend
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Hesap Oluştur</Text>
      <Text style={styles.text}>
        Hesabınızı açmak için detayları doldurun.
      </Text>
      <View style={{ height: 20 }} />
      <Text style={styles.input_title}>İsminiz</Text>
      <FormTextInput
        placeholder=""
        title=""
        value={name}
        inputType="text"
        onChangeText={handleNameChange}
      />
      <View style={{ height: 20 }} />
      <Text style={styles.input_title}>Telefon Numaranızı Girin</Text>
      <PhoneNumberInput onChange={handlePhoneNumberChange} />
      <View style={{ height: 5 }} />
      <Text style={styles.info_text}>
        Telefonunuza doğrulama kodu göndereceğiz
      </Text>
      <View style={{ height: 5 }} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
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
  info_text: {
    fontSize: 12.47,
    fontWeight: "bold",
    textAlign: "left",
    color: "#949CA9",
  },
  text: {
    fontSize: 12.47,
    fontWeight: "bold",
    textAlign: "right",
    color: "#949CA9",
  },
  button: {
    backgroundColor: "#00825A",
    width: "80%",
    padding: 16,
    borderRadius: 3.12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16.63,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    fontSize: 24.95,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#282828",
  },
  input_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: "80%",
    fontFamily: "Poppins-Regular",
    color: "black",
  },
});
