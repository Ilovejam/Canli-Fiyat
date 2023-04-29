import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import logo from '../images/logo/logo-dark.png';
import HamburgerMenu from '../components/HamburgerMenu';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleBellPress = () => {
    // Add your code for the bell icon press event here
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' }}
            style={styles.leftIcon}
          />
        </TouchableOpacity>
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
              style={styles.rightIconSearch}
            />
          <TouchableOpacity onPress={handleBellPress}>
            <Image
              source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png' }}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showMenu && <HamburgerMenu onClose={() => setShowMenu(false)} />}
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
  leftIcon: {
    width: 25,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  rightIconSearch: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: -40,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -10,
  },
});

export default Header;
