import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import logo from '../images/logo/logo-dark.png';
import {faArrowLeft, faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../components/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const SettingsHeader = ({ title }) => {
  const navigation = useNavigation();
 
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} style={styles.rightIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={logo}
            style={styles.centerIcon}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
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
    paddingBottom: 0,
    marginTop: 0,
    marginLeft: 10,
  },
  leftIcon: {
    width: 25,
    height: 30,
    resizeMode: 'contain',
  },
  centerIcon: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 20,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    alignItems: 'center',
    marginRight: 130,
  },
  title: {
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',

    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'  },
});

export default SettingsHeader;
