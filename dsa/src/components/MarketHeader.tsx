import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import logo from '../images/logo/logo-dark.png';
import {faBars, faBell,faStar} from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../components/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MarketHeader = ({ name, symbol, icon }) => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [isStarred, setIsStarred] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleBellPress = () => {
    // Add your code for the bell icon press event here
  };

  const handleSearchPress = () => {
    setIsStarred(!isStarred);
  };


  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size={22} style={styles.rightIcon} />
        </TouchableOpacity>
          <Image
            source={logo}
            style={styles.centerIcon}
          />
 
        <View style={styles.coinInfo}>
            <Image source={{ uri: icon }} style={styles.coinIcon} />
            <Text style={styles.coinName}>{name}</Text>
        </View>


        <View style={styles.rightIconContainer}>
          <TouchableOpacity onPress={handleSearchPress}>
            <FontAwesomeIcon icon={faStar} size={22} style={styles.rightIconSearch} />
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
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 27,
    marginLeft: 0,
    marginBottom: 0,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
  },
  centerIcon: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 20,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  symbol: {
    fontSize: 14,
    color: '#757575',
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
  coinInfo: {
    position: 'absolute',
    bottom: 0,
    left: Dimensions.get('window').width / 2 - 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
  },
  coinIcon: {
    width: 30,
    height: 30,
    marginLeft: -40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  coinName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
      
});

export default MarketHeader;
