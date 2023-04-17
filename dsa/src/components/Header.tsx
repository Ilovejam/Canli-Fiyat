import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

import logo from '../images/logo/logo-dark.png';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' }}
        style={styles.leftIcon}
      />
      <View style={styles.titleContainer}>
        <Image
          source={logo}
          style={styles.centerIcon}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightIconContainer}>
        <Image
          source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png' }}
          style={styles.rightIcon}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 10,
  },
  leftIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  centerIcon: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 20,
    resizeMode: 'contain',
  },
  rightIconContainer: {
    flexDirection: 'row',
  },
  rightIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});

export default Header;
