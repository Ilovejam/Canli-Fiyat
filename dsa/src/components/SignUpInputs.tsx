import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormTextInput } from "./FormTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";


interface ISignUpInputsProps {
  onSignUp: (name: string, phoneNumber: string, password: string) => void;
}

export const SignUpInputs = (props: ISignUpInputsProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation();
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
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUpPress = () => {
    navigation.navigate("SignUpScreen"); // Navigate to the SignUpScreen when clicked
  };
  const navigateTo = (screen) => {
    if (screen === 'SignUpScreen') {
      navigation.navigate('SignUpScreen');
    } else {
      console.warn('LoginInputs: unknown screen name');
    }
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
      <TouchableOpacity style={styles.signupButton} onPress={() => navigateTo('SignUpScreen')}>
        <Text style={styles.signupButtonText}>
          Hesabın var mı? Hemen giriş yap!
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleCheckBoxChange}>
            <View style={styles.checkbox}>
              {isChecked && <View style={styles.checkboxInner} />}
            </View>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            Aydınlatma metnini onaylıyorum
          </Text>
      </View>
      
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
    marginTop: 15,
    width: "100%",
  },
  button: {
    backgroundColor: "#603AF5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 3.12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  signupButton: {
    marginTop: 20,
    width: "100%",
},
  signupButtonText: {
      color: "#67BBF9",
      fontSize: 14,
      textAlign: "center",
    },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#00825A",
  },
  checkboxText: {
    fontSize: 14,
    color: "red",
  },
});

export default SignUpInputs;
