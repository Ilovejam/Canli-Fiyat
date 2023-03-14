import { StyleSheet, TextInput, View } from "react-native";


interface TextInputProps {
    placeholder: string;
}

export const FormTextInput = (props: TextInputProps) => {

  return (
     
    <TextInput
    style={styles.input}
    placeholder="İsminizi girin"  />
  );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#eee',
        borderRadius: 6.24,
      }
});