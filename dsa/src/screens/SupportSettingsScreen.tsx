import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faBell, faShieldAlt, faQuestionCircle, faAddressBook, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SettingsHeader from '../components/SettingsHeader';
import { Image } from 'react-native';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import BackgroundCircles from '../components/BackgroundCircles';
const SupportSettingsScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
        <BackgroundCircles />
        <SettingsHeader title="Support" style={styles.header}/>
       <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/aisupport.png')} />
        </View>
        <TouchableOpacity style={styles.card} onPress={() => navigateTo('General')}>
            <Text style={styles.cardTitle}>
                <Text style={{ fontWeight: 'bold' }}>ALB Pro</Text>'ya nasıl geçebilirim?
            </Text>
            <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigateTo('General')}>
            <Text style={styles.cardTitle}>İşlemlerimi portfolyoma nasıl eklerim?</Text>
            <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigateTo('General')}>
            <Text style={styles.cardTitle}>İncelediğim varlıkları nasıl paylaşırım?</Text>
            <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigateTo('General')}>
            <Text style={styles.cardTitle}>Nasıl alarm ekleyip kaldırabilirim?</Text>
            <FontAwesomeIcon icon={faChevronRight} color="rgba(96, 58, 245, 1)" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 60,
        marginLeft: 0,
        width: '100%',
      },
      card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        bottom: 160,
        backgroundColor:'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        width: '90%',
      },
      cardTitle: {
        marginLeft: 15,
        fontSize: 15,
        color: '#333333',
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
        marginBottom: 120,
        resizeMode: 'contain',
        flex: 1,
      },
});

export default SupportSettingsScreen;
