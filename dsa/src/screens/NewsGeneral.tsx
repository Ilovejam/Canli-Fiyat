import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import { Box, VStack, HStack, Button } from 'native-base';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsCard from '../components/NewsCard';
import BackgroundCircles from '../components/BackgroundCircles';
import { useNavigation } from '@react-navigation/native';
import NewsSliderCategories from '../components/NewsSliderCategory';

export default function NewsGeneral() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState('Overview');

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6',
    )
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching articles: ', error));
  }, []);

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory
    ? articles.filter(article => {
      if (selectedCategory === 'KAP') {
        return article.category === 'Sport';
      } else if (selectedCategory === 'Kripto') {
        return article.category === 'Crypto';
      } else if (selectedCategory === 'Ekonomi') {
        setArticles(articles.sort(() => Math.random() - 0.5));
      }
      return true;
    })
    : articles;

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <Header
        title="Haberler"
        showBackIcon={selectedCategory !== null}
        style={styles.header}
        onBackPress={() => setSelectedCategory(null)}
      />
      <NewsSliderCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ScrollView>
        <Box>
          <NewsSlider category={selectedCategory || 'general'} />
        </Box>
        <View style={styles.upcomingEventsContainer}>
          <Text style={styles.sectionTitle}>Ekonomik Takvim</Text>
          <UpcomingEvents style={styles.eventsContainer} />
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Haberler</Text>
          <NewsCard articles={filteredArticles} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginLeft: -10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 0,
    fontFamily: 'Worksans-Black',
  },
  eventsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
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
    borderRadius: 5,
    marginHorizontal: 1,
    marginTop: -40,
    marginVertical: -50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
    width: '100%',
  },
  upcomingEventsContainer: {
    borderRadius: 5,
    marginHorizontal: 1,
    marginVertical: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    marginBottom: -40,
    marginTop: 0,
  },
});
