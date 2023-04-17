import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import PortfolioCard from '../components/PortfolioCard';
import VerifySlider from '../components/VerifySlider';
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <ProfilePicture
        imageUrl="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg"
        size={100}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Mücahit Coşkun Eryılmaz</Text>
        <Text style={styles.jobTitle}>Ürün Yöneticisi</Text>
      </View>
      <PortfolioCard />
      <VerifySlider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Work Sans',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
    color: '#000',
  },
  jobTitle: {
    fontFamily: 'Work Sans',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#000',
    marginTop: 8,
  },
});

export default ProfileScreen;
