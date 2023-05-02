import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const NewsPrivate = ({ route }) => {
  const { title, url, description, content, apiKey } = route.params;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${url}&apiKey=${apiKey}`);
        const json = await response.json();
        setArticle(json.articles[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticle();
  }, [url, apiKey]);

  return (
    <ScrollView style={styles.container}>
      {article && (
        <>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{article.description}</Text>
          <Text style={styles.content}>{article.content}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsPrivate;
