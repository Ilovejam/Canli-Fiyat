import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Image, FlatList, Box } from 'native-base';

const screenWidth = Dimensions.get('window').width;

const NewsSlider = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6',
      );
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <Box p={4} bg="white" borderRadius={8} mx={2} width={screenWidth - 50}>
      <Image
        source={{ uri: item.urlToImage }}
        alt={item.title}
        resizeMode="cover"
        borderRadius={8}
        width="100%"
        height={200}
      />
      <Text fontSize="lg" fontWeight="bold" pt={2} textAlign="center">
        {item.title}
      </Text>
    </Box>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NewsSlider;
