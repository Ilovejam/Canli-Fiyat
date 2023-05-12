import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Image, FlatList, Box, } from 'native-base';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewsPrivate from '../screens/NewsPrivate';
import { BlurView } from '@react-native-community/blur';

const screenWidth = Dimensions.get('window').width;

const NewsSlider = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0eae1f96c9e34e29b613a83a18ffc7a6',
      );
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();

  const handlePress = (article) => {
    navigation.navigate('NewsPrivate', { article });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Box p={0} mx={1} width={screenWidth - 40} style={styles.container}>
        <View style={{ width: '100%', height: screenWidth * 0.5 }}>
          <Image
            source={{ uri: item.urlToImage }}
            alt={item.title}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
          />
          <BlurView
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            px={3}
            py={2}
            blurType="dark"
            blurAmount={63}
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
            borderBottomLeftRadius={8}
            borderBottomRightRadius={8}
          >
            <Text color="white" fontSize="lg" marginLeft={2} marginBottom={-3} paddingLeft={2} paddingTop={2}> 
              {item.title.length > 68 ? item.title.slice(0, 65) + '...' : item.title}
            </Text>
            <Text color="blue.400" fontSize="sm" mt={1} marginLeft={2} marginBottom={1} paddingLeft={2} paddingTop={2}>
              {' ' + item.source.name + ' · ' + Math.floor(Math.random() * 6) + 0 + ' dk'}
            </Text>
          </BlurView>
        </View>
      </Box>
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    marginTop:  -0,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default NewsSlider;
