import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NewsCardProps = {
  onPress: () => void;
};

const NewsCard: React.FC<NewsCardProps> = ({ onPress }) => {
  const [source, setSource] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch a list of articles from the News API
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6')
      .then(response => response.json())
      .then(data => {
        // Choose a random article from the list
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        const article = data.articles[randomIndex];

        // Set the source, title, description, and image states to the relevant data from the article
        setSource(article.source.name);
        setTitle(article.title);
        setDescription(article.description);
        setImage(article.urlToImage);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewsPrivate')}>
      
      <View style={styles.textContainer}>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.title}>{title}</Text>
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
  },
  imageContainer: {
    width: 110,
    height: 110,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
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
