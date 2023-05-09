import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import logo from '../images/logo/logo-dark.png';
import {faBars, faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../components/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Header = ({ title }) => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleBellPress = () => {
    // Add your code for the bell icon press event here
  };

  const handleSearchPress = () => {
    // Add your code for the search icon press event here
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size={22} style={styles.rightIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={logo}
            style={styles.centerIcon}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightIconContainer}>
          <TouchableOpacity onpress={handleSearchPress}>
            <FontAwesomeIcon icon={faSearch} size={22} style={styles.rightIconSearch} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBellPress}>
            <FontAwesomeIcon icon={faBell} size={22} style={styles.rightIcon} />
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: -40,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',

    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'  },
});

export default Header;