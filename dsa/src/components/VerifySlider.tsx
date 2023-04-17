import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Box } from 'native-base';

const VerifySlider = () => {
  return (
    <Box
      borderRadius={16}
      padding={4}
      width="100%"
      maxWidth="358px"
      height="177px"
      marginVertical={4}
      style={styles.slider}
    >
      <View style={styles.container}>
        <View style={[styles.card, styles.cardLeft]}>
          <Image source={require('../images/phone.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Telefon doğrulama
          </Text>
          <Text style={styles.cardTitle}>01 Adım Kaldı</Text>
          <Image source={require('../images/arrow-right.png')} />
        </View>
        <View style={[styles.card, styles.cardRight]}>
          <Image source={require('../images/mail.png')} style={styles.mailImage} />  
          <Text style={styles.cardText}>
            Email doğrulama
          </Text>
          <Text style={styles.cardTitle}>02 Adım Kaldı</Text>
          <Image source={require('../images/arrow-right.png')} />
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  slider: {
    border: '1px solid',
    borderImageSource: 'radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
    borderImageSlice: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    position: 'relative',
  },
  cardLeft: {
    backgroundImage: 'linear-gradient(180deg, rgba(89,205,144,1) 0%, rgba(255,255,255,0) 100%)',
    marginRight: 8,
  },
  cardRight: {
    backgroundImage: 'linear-gradient(180deg, rgba(255,118,133,1) 0%, rgba(255,255,255,0) 100%)',
    marginLeft: 8,
  },
  cardTitle: {
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  cardText: {
    fontFamily: 'Work Sans',
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
    marginTop:32,
    marginBottom: 8,
  },
  cardImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    zIndex: 1,
  },
  mailImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    zIndex: 1,
  },
});

export default VerifySlider;
