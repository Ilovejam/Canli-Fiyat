import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import { Box, VStack, HStack, Button } from 'native-base';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsCard from '../components/NewsCard';
import BackgroundCircles from '../components/BackgroundCircles';
import { useNavigation } from '@react-navigation/native';

export default function NewsGeneral() {

  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));
  }, []);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory ? articles.filter(article => article.category === selectedCategory) : articles;

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <Header title="Haberler" />
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={2} mt={2} mb={4} mx={4}>
            <Button onPress={() => handleCategoryPress('Ekonomi')}>Ekonomi</Button>
            <Button onPress={() => handleCategoryPress('Piyasa')}>Piyasa</Button>
            <Button onPress={() => handleCategoryPress('Şirket')}>Şirket</Button>
            <Button onPress={() => handleCategoryPress('Döviz')}>Döviz</Button>
            <Button onPress={() => handleCategoryPress('KAP')}>KAP</Button>
            <Button onPress={() => handleCategoryPress('Kripto')}>Kripto</Button>
            <Button onPress={() => handleCategoryPress('Kıymetli Metal')}>Kıymetli Metal</Button>
            <Button onPress={() => handleCategoryPress('Ürün')}>Ürün</Button>
          </HStack>
        </ScrollView>

        <Box>
          <NewsSlider />
        </Box>
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Yaklaşan Etkinlikler</Text>
          <UpcomingEvents style={styles.eventsContainer} />
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Haberler</Text>
          {articles.map(article => (
            <NewsCard
            key={article.title}
            image={article.urlToImage}
            source={article.source.name}
            title={article.title}
            description={article.description}
              onPress={() => console.log('NewsCard pressed')}
          />
          
          ))}
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
    marginVertical: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
});
