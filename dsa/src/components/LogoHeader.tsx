import React from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';
import logo from '../../images/logo.svg';


const LogoHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24.95,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#282828',
  },

  
});

export default LogoHeader;
