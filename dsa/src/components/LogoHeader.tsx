import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

interface LogoHeaderProps {
  source: any; // pass the source of the logo image as a prop
}

const LogoHeader = ({ source }: LogoHeaderProps) => {
  return (
    <Image style={styles.logo} source={source} resizeMode="contain" />
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 30, // Adjust the margin as per your requirement
  },
});

export default LogoHeader;
