import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import newsImage from '../../assets/images/news.png';

const NewsPrivate = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={newsImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>News sda Private</Text>
      </View>
      <Text style={styles.backButton} onPress={handleBackPress}>
        Go Back
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    width:1000,
    height: 800,
    marginBottom: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default NewsPrivate;
