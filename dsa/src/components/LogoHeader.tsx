import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

interface LogoHeaderProps {
  source: any; // pass the source of the logo image as a prop
}

const LogoHeader = ({ source }: LogoHeaderProps) => {
  return (
    <View style={styles.logoContainer}>
      <Image source={source} style={styles.logo} />
    </View>
  );
};

const { width } = Dimensions.get('window');
const logoWidthPercentage = 0.2; // 50% of the screen width

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    width: '100%',
    // container at the top of the screen
    position: 'absolute',
    top: '5%',


  },
  logo: {
    width: width * logoWidthPercentage,
    height: undefined,
    aspectRatio: 2, // Adjust this value based on the aspect ratio of your logo
    resizeMode: 'contain',
    
  },
});


export default LogoHeader;
