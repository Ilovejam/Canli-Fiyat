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
    <Box p={0} borderRadius={8} mx={1} width={screenWidth - 50}>
      <View style={{ width: '100%', height: screenWidth * 0.6 }}>
        <Image
          source={{ uri: item.urlToImage }}
          alt={item.title}
          resizeMode="cover"
          borderRadius={8}
          style={{ width: '100%', height: '100%' }}
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          px={3}
          py={2}
          bg="rgba(0,0,0.9,0.5)"
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            {item.title.length > 68 ? item.title.slice(0, 65) + '...' : item.title}
          </Text>
        </Box>
      </View>
    </Box>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
    />
  );
};

export default NewsSlider;
