import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LogoHeader from '../components/LogoHeader';
import NewsSlider from '../components/NewsSlider';
import NewsCard from '../components/NewsCard';
import UpcomingEvent from '../components/UpcomingEvents';

export default function NewsGeneral() {
  const events = [
    { date: '22 Jun', title: 'Event 1' },
    { date: '30 Jun', title: 'Event 2' },
    // Add more events here
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LogoHeader source={require('../../assets/images/logos/canlifiyat_header.png')} />
        <Text style={styles.title}>Başlıklar</Text>
        <NewsSlider
          style={styles.newsSlider}
          title="Sample News Title"
          imageUrl="https://iasbh.tmgrup.com.tr/cd880e/650/344/136/0/1670/807?u=https://isbh.tmgrup.com.tr/sbh/2022/11/02/son-dakika-atv-a-haber-a-para-a-news-gundem-ozel-ortak-yayini-baskan-erdogandan-onemli-aciklamalar-1667415365136.jpg"
        />
        <Text style={styles.title}>Yaklaşan Etkinlikler</Text>
        {events.map((event, index) => (
          <UpcomingEvent key={index} date={event.date} title={event.title} />
        ))}
        <Text style={styles.title}>Haberler</Text>
        <NewsCard
          style={styles.newsCard}
          title="Sample news"
          imageUrl="https://iasbh.tmgrup.com.tr/cd880e/650/344/136/0/1670/807?u=https://isbh.tmgrup.com.tr/sbh/2022/11/02/son-dakika-atv-a-haber-a-para-a-news-gundem-ozel-ortak-yayini-baskan-erdogandan-onemli-aciklamalar-1667415365136.jpg"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'stretch',
  },
  newsCard: {
    width: '100%',
  },
  newsSlider: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
});
