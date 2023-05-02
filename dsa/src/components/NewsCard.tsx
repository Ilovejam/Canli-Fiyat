import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Article {
  title: string;
  description: string;
  source: { name: string };
  urlToImage: string;
}

interface NewsCardProps {
  category: string;
  articles: Article[];
}

const NewsCard: React.FC<NewsCardProps> = ({ category, articles }) => {
  const navigation = useNavigation();

  const handlePress = (article: Article) => {
    navigation.navigate("NewsPrivate", {
      title: article.title,
      description: article.description,
      content: article.content
    });
  };
  
  return (
    <>
      {articles?.map((article, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(article)} style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.source}>{article.source.name}</Text>
            <Text style={styles.title}>{article.title.length > 50 ? article.title.substring(0, 50) + "..." : article.title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </>
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
