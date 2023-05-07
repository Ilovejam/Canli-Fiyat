import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormTextInput } from "./FormTextInput";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SignUpScreen from "../screens/SignUpInputs";

interface ILoginInputsProps {
  onLogin: (username: string, password: string, phoneNumber: string) => void;
}

export const LoginInputs = (props: ILoginInputsProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false); // Add a new state to track the checkbox state
  const navigation = useNavigation(); 

  const navigateTo = (screen) => {
    if (screen === 'SignUpScreen') {
      navigation.navigate('SignUpScreen');
    } else {
      console.warn('LoginInputs: unknown screen name');
    }
  };


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
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSignUpPress = () => {
    navigation.navigate("SignUpScreen"); // Navigate to the SignUpScreen when clicked
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
      <Text style={styles.title}>Telefon Numarası</Text>
      <FormTextInput
        placeholder="Telefon numaranızı girin"
        title=""
        value={phoneNumber}
        inputType="phone-pad"
        onChangeText={handlePhoneNumberChange}
      />
      <Text style={styles.title}>Şifre</Text>
      <FormTextInput
        placeholder="Şifrenizi girin"
        title=""
        value={password}
        inputType="password"
        onChangeText={handlePasswordChange}
        
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
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
      <TouchableOpacity style={styles.signupButton} onPress={() => navigateTo('SignUpScreen')}>
        <Text style={styles.signupButtonText}>
          Hesabın yok mu? Hemen kayıt ol!
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 14,
      marginVertical: 10,
      textAlign: "left",
      color: "#603AF5",
      fontFamily: "Poppins",
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
  

export default LoginInputs;
