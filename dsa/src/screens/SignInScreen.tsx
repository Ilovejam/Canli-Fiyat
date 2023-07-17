import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  Platform,
  UIManager,
  findNodeHandle,
  Dimensions,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoHeader from '../components/LogoHeader';
import { NativeSyntheticEvent } from 'react-native';


const SignInScreen: React.FC<{ handleUserLoggedIn: Function }> = ({ handleUserLoggedIn }) => {
  const [name, setName] = useState('');
  const [telephone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const navigation = useNavigation();
  const nameRef = useRef<TextInput>(null);
  const telephoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      setKeyboardOffset(event.endCoordinates.height);
    });
  
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOffset(0);
    });
  
    // Clean up the listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  const handleSignIn = () => {
    // Perform your login logic here
    // Replace the following code with your actual login implementation
    if (name === '' || telephone === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      // Simulating successful login
      const user = {
        name: name,
        telephone: telephone,
      };
      handleUserLoggedIn(user);
    }
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleTextInputFocus = (
    ref: React.RefObject<TextInput>,
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    const inputHandle = findNodeHandle(ref.current);
    if (inputHandle && scrollViewRef.current) {
      UIManager.measureInWindow(inputHandle, (x, y, width, height) => {
        const screenY = y - height - 30; // Move the screen up
        const windowHeight = Dimensions.get('window').height;
        const maxVisibleHeight = windowHeight - keyboardOffset - 40; // Account for padding and button height
        if (screenY > maxVisibleHeight) {
          const scrollDistance = screenY - maxVisibleHeight;
          scrollViewRef.current.scrollTo({ x: 0, y: scrollDistance, animated: true });
          setKeyboardOffset(scrollDistance);
        }
      });
    }
  };
  
  
  
  

  const handlePasswordInputFocus = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingBottom: keyboardOffset }]}
      ref={scrollViewRef}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <LogoHeader />
      </View>
      <Image
        source={require('../images/backgrounds/3d_background.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Sizi Tanıyalım</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Kullanıcı adınız"
        placeholderTextColor="#603AF5"
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => telephoneRef.current?.focus()}
        onFocus={(event) => handleTextInputFocus(nameRef, event)}
        ref={nameRef}
      />

      <TextInput
        ref={telephoneRef}
        style={styles.input}
        value={telephone}
        onChangeText={setPhoneNumber}
        placeholder="Telefon Numaranız (5XX XXX XX XX)"
        placeholderTextColor="#603AF5"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        onFocus={(event) => handleTextInputFocus(telephoneRef, event)}
      />

      <TextInput
        ref={passwordRef}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Parolanız"
        placeholderTextColor="#603AF5"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleSignIn}
        onFocus={(event) => handleTextInputFocus(passwordRef, event)}
      />

      <TouchableOpacity onPress={handleNavigateToSignUp}>
        <Text style={{ textAlign: 'left', color: '#3498db' }}>Hesabınız yok mu? Kayıt olun!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22.9,
    fontFamily: 'Poppins-Regular',
    color: '#603AF5',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  header: {
    top: 10,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#9378FD',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#603AF5',
    padding: 10,
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
