import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faBell, faShieldAlt, faQuestionCircle, faAddressBook, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ContactInformationSettings from './ContactInformationSettings';
import GeneralSettingsScreen from './GeneralSettingsScreen';
import NotificationsSettingsScreen from './NotificationsSettingsScreen';
import SecuritySettingsScreen from './SecuritySettingsScreen';
import SupportSettingsScreen from './SupportSettingsScreen';
import BackgroundCircles from '../components/BackgroundCircles';
import Header from '../components/Header';
import { Image } from 'react-native';
import SettingsHeader from '../components/SettingsHeader';


const Stack = createStackNavigator();

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="General" component={GeneralSettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsSettingsScreen} />
      <Stack.Screen name="Security" component={SecuritySettingsScreen} />
      <Stack.Screen name="Support" component={SupportSettingsScreen} />
      <Stack.Screen name="ContactInformation" component={ContactInformationSettings} />
    </Stack.Navigator>
  );
};

const Settings = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    if (screen === 'General') {
      navigation.navigate('GeneralSettingsScreen');
    } else if (screen === 'Notifications') {
        navigation.navigate('NotificationsSettingsScreen');
    } else if (screen === 'Security') {
        navigation.navigate('SecuritySettingsScreen');
    } else if (screen === 'Support') {
        navigation.navigate('SupportSettingsScreen');
    } else if (screen === 'ContactInformation') {
        navigation.navigate('ContactInformationSettings');   
    } else {
        console.warn('SettingsScreen: unknown screen name');
    }
  };
  

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <BackgroundCircles />
        <SettingsHeader title="Ayarlar" />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/settings.png')} />
        </View>
      {/* <TouchableOpacity style={styles.card} onPress={() => navigateTo('General')}>
        <FontAwesomeIcon icon={faCog} color="#603AF5" style={styles.icon} />
        <Text style={styles.cardTitle}>General</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />

      </TouchableOpacity> */}

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('Notifications')}>
        <FontAwesomeIcon icon={faBell} color="#603AF5" style={styles.icon} />
        <Text style={styles.cardTitle}>Notifications</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />
       </TouchableOpacity>


      <TouchableOpacity style={styles.card} onPress={() => navigateTo('Security')}>
        <FontAwesomeIcon icon={faShieldAlt} color="#603AF5" style={styles.icon} />
        <Text style={styles.cardTitle}>Security</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />

      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('Support')}>
        <FontAwesomeIcon icon={faQuestionCircle} color="#603AF5" style={styles.icon} />
        <Text style={styles.cardTitle}>Support</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />

      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigateTo('ContactInformation')}>
        <FontAwesomeIcon icon={faAddressBook} color="#603AF5" style={styles.icon} />
        <Text style={styles.cardTitle}>Contact Information</Text>
        <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F9FB',
    marginBottom: 170,
    marginTop: 50,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%) ',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardTitle: {
    marginLeft: 15,
    fontSize: 20,
    color: '#603AF5',
    flex: 1,
  },
  icon: {
    fontSize: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  image: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    flex: 1,
  },
});

export default Settings;
