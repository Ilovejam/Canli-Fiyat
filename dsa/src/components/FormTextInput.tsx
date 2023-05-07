import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TextInputProps } from "react-native";
import React from "react";

interface IFormTextInputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  inputType?: 'text' | 'password' | 'phone' | 'phone-pad'; // Add 'phone-pad' here
}

export const FormTextInput = (props: IFormTextInputProps) => {
  const keyboardType =
    props.inputType === "phone" ? "phone-pad" : "default";

  const secureTextEntry = props.inputType === "password" ? true : false;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType={keyboardType}
            placeholder={props.placeholder}
            secureTextEntry={secureTextEntry}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    width: "100%",
    marginBottom: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#67BBF9",
    textAlign: "left"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
    width: "80%",
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    fontSize: 16,
    color: "#797A7C",
  },
});

export default FormTextInput;
