import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NewsCardProps {
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ category }) => {
  const [source, setSource] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [readingTime, setReadingTime] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch a list of articles from the News API
    const apiUrl = getCategoryApiUrl(category);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Shuffle the list of articles
        const shuffledArticles = shuffle(data.articles);

        // Choose a random article from the shuffled list
        const randomIndex = Math.floor(Math.random() * shuffledArticles.length);
        const article = shuffledArticles[randomIndex];

        // Set the source, title, description, and image states to the relevant data from the article
        setSource(article.source.name);
        setTitle(article.title);
        setDescription(article.description);
        setImage(article.urlToImage);
        setReadingTime(Math.floor(Math.random() * 6) + 1); // Generates a random number between 1 and 6
      })
      .catch(error => console.error(error));
  }, [category]);

  const getCategoryApiUrl = (category: string) => {
    switch (category) {
      default:
        return 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6';
    }
  };

  const shuffle = (array: any[]) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.source}>{source} {readingTime} dk önce</Text>
        <Text style={styles.title}>{title.length > 50 ? title.substring(0, 50) + "..." : title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    width: 110,
    height: 110,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    margin: 5,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  source: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});

export default NewsCard;
