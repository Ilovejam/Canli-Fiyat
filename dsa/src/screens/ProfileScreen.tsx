import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import PortfolioCard from '../components/PortfolioCard';
import VerifySlider from '../components/VerifySlider';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <BackgroundCircles />
      <Header title="Profil" />
      <ProfilePicture
        imageUrl="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg"
        size={100}
        style={{ marginTop: 30 }}
      />
      <View style={[styles.nameContainer, { flex: 1 }]}>
        <Text style={styles.name}>Mücahit Coşkun Eryılmaz</Text>
        <Text style={styles.jobTitle}>Ürün Yöneticisi</Text>
      </View>
      <PortfolioCard style={styles.portfolioCard} />
      <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
        <Text style={styles.profileMessage}>Profilinizi Tamamlayın</Text>
      </View>
      <VerifySlider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  portfolioCard: {
    marginTop: 10,
  },
  nameContainer: {
    marginTop: 20,
    marginBottom: -100,
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
  profileMessage: {
    fontFamily: 'Work Sans',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'left',
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
