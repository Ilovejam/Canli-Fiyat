import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
import ProfilePicture from './ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import albImage from '../images/alb+.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperclip, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import SettingsScreen from '../screens/SettingsScreen';

const HamburgerMenu = ({ onClose }) => {
  const menuWidth = Dimensions.get('window').width / 1.2;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SettingsScreen');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={[styles.menu, { width: menuWidth }]}>
        <ImageBackground source={require('../images/hamburgerbg.png')} style={styles.background}>
          <View style={styles.profileContainer}>
            <ProfilePicture
              imageUrl="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg"
              size={120}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}></Text>
            <Text style={styles.jobTitle}></Text>
            <Image source={albImage} style={styles.image} />
          </View>
          
          <View style={styles.options}>
            <View style={styles.caption}>
              <FontAwesomeIcon icon={faPaperclip} color="#603AF5" style={styles.icon} />
              <Text style={styles.captionTitle}>Görüntü</Text>
            </View>
            <Text style={styles.captionText}>Profil, ekran ve okuma ayarlarınız.</Text>
            <View style={styles.caption}>
              <FontAwesomeIcon icon={faFileAlt} color="#603AF5" style={styles.icon} />
              <Text style={styles.captionTitle}>İletişim Tercihleri</Text>
            </View>
            <Text style={styles.captionText}>Profil, ekran ve okuma ayarlarınız.</Text>
            <TouchableOpacity style={styles.caption} onPress={handlePress}>
              <FontAwesomeIcon icon={faCog} color="#603AF5" style={styles.icon}  />
              <Text style={styles.captionTitle}>Ayarlar</Text>
            </TouchableOpacity>
            <Text style={styles.captionText}>Güvenlik, gizlilik ve paylaşım ayarları.</Text>
          </View>
        
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  options: {
    marginTop: 90,
  },
  caption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 22,
    width: 30,
  },
  captionText: {
    fontSize: 11.3,
    color: '#888',
   
  },
  captionTitle: {
    fontSize: 22.6,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 0,
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    top: 80,
    left: -110,
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: -Dimensions.get('window').width / 2,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 9999,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    zIndex: 100000,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 0,
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  jobTitle: {
    fontSize: 14,
    color: '#888',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#eee',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuItemText: {
    fontSize: 14,
  },
  background: {
    flex: 1,
    width: '110%',
    height: '110%',
    marginTop:20,
    marginLeft:-50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HamburgerMenu;
