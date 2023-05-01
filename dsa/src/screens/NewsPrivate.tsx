import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NewsPrivate = ({ route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{source?.name}</Text>
    </View>
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
  source: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsPrivate;
