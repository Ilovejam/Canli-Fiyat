import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormTextInput } from "./FormTextInput";

interface ISignUpInputsProps {
  onSignUp: (name: string, phoneNumber: string, password: string) => void;
}

export const SignUpInputs = (props: ISignUpInputsProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSignUp = () => {
    props.onSignUp(name, phoneNumber, password);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İsim</Text>
      <FormTextInput
        placeholder="Adınızı girin"
        title=""
        value={name}
        inputType="text"
        onChangeText={handleNameChange}
      />
      <Text style={styles.title}>Telefon Numarası</Text>
      <FormTextInput
        placeholder="Telefon numaranızı girin"
        title=""
        value={phoneNumber}
        inputType="phone"
        onChangeText={handlePhoneNumberChange}
      />
      <Text style={styles.title}>Şifre</Text>
      <FormTextInput
        placeholder="Şifrenizi girin"
        title=""
        value={password}
        inputType="password"
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkboxCircle}
          onPress={handleCheckboxChange}
        >
          {isChecked && <View style={styles.radioCircle} />}
        </TouchableOpacity>
        <Text style={styles.radioText}>Aydınlatma metnini onaylıyorum</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Devam Et</Text>
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

export default SignUpInputs;
