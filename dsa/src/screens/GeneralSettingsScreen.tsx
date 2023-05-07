import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsHeader from '../components/SettingsHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faBell, faShieldAlt, faQuestionCircle, faAddressBook, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const GeneralSettingsScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('Turkish');
  const [currency, setCurrency] = useState('Turkish Lira');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleCurrency = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  return (
    <View style={styles.container}>
      <SettingsHeader title="Genel" />
      <TouchableOpacity style={styles.toggleContainer} onPress={toggleLanguage}>
        <Text style={styles.toggleTitle}>Language</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />

        <View style={styles.toggleItem}>
          <Text>{language}</Text>
          <Text style={styles.toggleIcon}>{isLanguageOpen ? '>' : '<'}</Text>
        </View>
      </TouchableOpacity>
      {isLanguageOpen && (
        <View style={styles.toggleList}>
          <TouchableOpacity style={styles.toggleItem}>
            <Text>English</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.toggleContainer} onPress={toggleCurrency}>
        <Text style={styles.toggleTitle}>Currency</Text>
        <View style={styles.toggleItem}>
          <Text>{currency}</Text>
          <Text style={styles.toggleIcon}>{isCurrencyOpen ? '>' : '<'}</Text>
        </View>
      </TouchableOpacity>
      {isCurrencyOpen && (
        <View style={styles.toggleList}>
          <TouchableOpacity style={styles.toggleItem}>
            <Text>USD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleItem}>
            <Text>EUR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-320,
  },
  toggleContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  toggleTitle: {
    fontSize: 18,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  toggleList: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default GeneralSettingsScreen;
