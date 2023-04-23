import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ProfilePicture from './ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HamburgerMenu = ({ onClose }) => {
  const menuWidth = Dimensions.get('window').width / 2;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={[styles.menu, { width: menuWidth }]}>
            <View style={styles.profileContainer}>
                <ProfilePicture
                imageUrl="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg"
                size={120}
                />
                
            </View>
            <View style={styles.nameContainer}>
                    <Text style={styles.name}>Mücahit Coşkun Eryılmaz</Text>
                    <Text style={styles.jobTitle}>Ürün Yöneticisi</Text>
            </View>
            <TouchableOpacity style={styles.menuItem} onPress={() => {
                onClose();
                navigation.navigate('LoginScreen');
                }}>
                <Text style={styles.menuItemText}>Çıkış Yap</Text>
            </TouchableOpacity>

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
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
  fuckText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
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
});

export default HamburgerMenu;
