import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface PhoneNumberInputProps {
  onChange: (phoneNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text_input}
        keyboardType="phone-pad"
        value={phoneNumber}
        placeholder="(123) 456-7890"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
    //center the container
    alignItems: 'center',
    display: 'flex',
  },
  text_input: {
    padding: 16,
    width: '80%',
    marginBottom: 16,
    backgroundColor: '#eee',
    borderRadius: 6.24,
    //center the text
    textAlign: 'center',
  },
});

export default PhoneNumberInput;
