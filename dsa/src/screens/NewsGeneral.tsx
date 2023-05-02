import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import { Box } from 'native-base';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsCard from '../components/NewsCard';
import BackgroundCircles from '../components/BackgroundCircles';
import { useNavigation } from '@react-navigation/native';
import NewsSliderCategories from '../components/NewsSliderCategory';

export default function NewsGeneral() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("Overview");

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching articles: ', error));
  }, []);
  
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory ? articles.filter(article => {
    if (selectedCategory === "KAP") {
      return article.category === "Sport";
    } else if (selectedCategory === "Kripto") {
      return article.category === "Crypto";
    } else if (selectedCategory === "Ekonomi") {
      setArticles(articles.sort(() => Math.random() - 0.5));
    }
    return true;
  }) : articles;

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <Header title="Haberler" />
      <NewsSliderCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ScrollView>
        <Box>
          <NewsSlider category={selectedCategory || 'general'} />
        </Box>
        <View style={styles.upcomingEventsContiner}>
          <Text style={styles.sectionTitle}>Yaklaşan Etkinlikler</Text>
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
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
  upcomingEventsContiner: {
    borderRadius: 5,
    marginHorizontal: 1,
    marginVertical: 5,
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
});
