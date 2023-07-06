import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native';
import { Text, Input, Box, Modal, ScrollView } from 'native-base';
import logo from '../images/logo/logo-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell, faSearch, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [showMenu, setShowMenu] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleBellPress = () => {
    // Add your code for the bell icon press event here
  };

  const handleSearchPress = () => {
    setSearchVisible(!searchVisible);
    setShowSearchIcon(false);
  };

  const handleCrossPress = () => {
    setSearchVisible(false);
    setShowSearchIcon(true);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const symbols = [];
    for (const categorySymbols of Object.values(CATEGORIES)) {
      for (const symbol of categorySymbols) {
        if (symbol.toLowerCase().startsWith(query.toLowerCase())) {
          symbols.push(symbol);
        }
      }
    }
    setSearchResults(symbols);
  };
  

  const handleSearchResultPress = (symbol) => {
    navigation.navigate('MarketPrivate', { symbol });
    setSearchVisible(false);
    setShowSearchIcon(true);
    setSearchQuery('');
    setSearchResults([]);
  };

  const isMarketPrivateScreen = route.name === 'MarketPrivate';

  return (
    <>
      <View style={styles.header}>
        {isMarketPrivateScreen ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={22} style={styles.leftIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <FontAwesomeIcon icon={faBars} size={22} style={styles.leftIcon} />
          </TouchableOpacity>
        )}
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.centerIcon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightIconContainer}>
          {showSearchIcon && (
            <TouchableOpacity onPress={handleSearchPress}>
              <FontAwesomeIcon icon={faSearch} size={25} style={styles.rightIconSearch} />
            </TouchableOpacity>
          )}
          {!showSearchIcon && (
            <TouchableOpacity onPress={handleCrossPress}>
              <FontAwesomeIcon icon={faTimes} size={25} style={styles.rightIconSearch} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleBellPress}>
            <FontAwesomeIcon icon={faBell} size={22} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {showMenu && <HamburgerMenu onClose={() => setShowMenu(false)} />}
      {searchVisible && (
        <Modal isOpen={searchVisible} onClose={() => setSearchVisible(false)} size="full">
          <Modal.Content>
            <Modal.Header>
              <Input
                variant="filled"
                autoFocus
                placeholder="Search..."
                value={searchQuery}
                onChangeText={handleSearchChange}
                borderRadius={10}
                bg="gray.100"
                px={2}
              />
            </Modal.Header>
            <Modal.Body>
              <ScrollView>
                {searchResults.map((result, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.searchResult}
                    onPress={() => handleSearchResultPress(result)}
                  >
                    <Text>{result}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
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
    fontFamily: 'Worksans-Black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchResult: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Header;
