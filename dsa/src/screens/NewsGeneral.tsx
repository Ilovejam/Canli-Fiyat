import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import LogoHeader from '../components/LogoHeader';
import NewsSlider from '../components/NewsSlider';
import { Box, VStack } from 'native-base';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsCard from '../components/NewsCard';

export default function NewsGeneral() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box>
          <NewsSlider />
        </Box>
        <VStack>
          <Text style={styles.sectionTitle}>Yaklaşan Etkinlikler</Text>
          <UpcomingEvents />
        </VStack>
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Haberler</Text>
          <NewsCard
            imageSource={{ uri: 'https://i.imgur.com/gcKBIbG.jpg' }}
            sourceLogo={{ uri: 'https://i.imgur.com/3q3T8IN.png' }}
            title='İstanbul Borsası İlk Çeyrekte %15 Yükseldi'
            time='1 saat önce'
            source='CNBC'
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  newsContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
