import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type NewsCardProps = {
  image: string;
  source: string;
  title: string;
  description: string;
  onPress: () => void;
};

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  source,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
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
