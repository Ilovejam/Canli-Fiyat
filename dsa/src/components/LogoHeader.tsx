import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import { SvgUri } from 'react-native-svg';
import logo from '../images/logo/logo.svg';

const LogoHeader = ( ) => {

  return (
    <>
      <View style={styles.header}>
          <Image
            source={logo}
            style={styles.centerIcon}
          />        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 17,
    marginLeft: 10,
  },
  centerIcon: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 20,
    resizeMode: 'contain',
  },
  
});

export default LogoHeader;
