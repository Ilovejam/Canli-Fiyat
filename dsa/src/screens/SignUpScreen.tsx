import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SignUpInputs } from "../components/SignUpInputs";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import LogoHeader from "../components/LogoHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function SignUpScreen() {

  const navigation = useNavigation();


  const handleSignUp = async (name: string, phoneNumber: string, password: string) => {
    try {
      const response = await fetch('http://192.168.1.1:3000/signup', {
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
      <View style={styles.container}>
      <LogoHeader source={require('../../src/images/logo/login-signup_logo.png')} />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../src/images/backgrounds/3d_background.png')}
            style={styles.secondImage}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sizi tanıyalım</Text>
        </View>
        <SignUpInputs onSignUp={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
},
container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 100, // Adjust this value for your logo size
    height: 50, // Adjust this value for your logo size
    resizeMode: 'contain',
},
imageContainer: {
    marginBottom: 10,
    width: 250,
    height: 200,
    alignSelf: 'center', // Center the image container horizontally
  },
  secondImage: {
    width: '100%', // Set the image width to 100% of the container
    height: '100%', // Set the image height to 100% of the container
    resizeMode: 'contain',
  },
  titleContainer: {
    marginTop: 20, // Increase the top margin to create some space between the image and title
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#603AF5',
    fontFamily: 'Poppins',
    textAlign: 'center', // Center the title horizontally
  },
});
