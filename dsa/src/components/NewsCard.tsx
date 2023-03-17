import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

interface NewsCardProps {
  style?: any;
  title: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageTop} source={{ uri: 'data:image/png;base64,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' }} />        
      <Text style={styles.newsSource}>CNBC</Text>
      <Text style={styles.readTime}>25 dk</Text>
      <View style={styles.newsContent}>
        <Text>ABD'de işsizlik maaşı başvuruları son haftada 2 bin kişi azaldı </Text>
      </View>
      <Image style={styles.imageRight} source={{ uri: imageUrl }} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth *0.923076923,
    height: screenHeight *0.170616114, // Adjust height here
    backgroundColor: 'white',
    justifyContent: 'flex-start', // Change from 'center' to 'flex-start'
    alignItems: 'center',
  },
  imageRight: {
    position: 'absolute', // add position absolute
    top: '30%', // position in the middle vertically
    right: 0, // position on the right
    width: '40%', // set width to 20% of the container width
    height: '40%', // set height to 60% of the container height
    resizeMode: 'contain',

  },
  imageTop: {
    position: 'absolute', // add position absolute
    top: 10, // position on the top
    left: 20, // position on the left
    width: (screenWidth * 0.923076923) * 0.05, // set width to 100% of the container width
    height: (screenHeight * 0.923076923) * 0.1, // set height to 30% of the container height
    resizeMode: 'contain',

  },
  newsSource: {
    position: 'absolute', // add position absolute
    top: 40, // position in the middle vertically
    left: 40, // position to the right of the image
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },
  readTime: {
    position: 'absolute', // add position absolute
    top: 45, // position in the middle vertically
    left: 90, // position to the right of the image
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  newsContent: {
    position: 'absolute', // add position absolute
    top: 60, // position in the middle vertically
    left: 20,
    fontSize: 10,
    fontWeight: 'bold',
    width: '80%',
    color: '#333333',
  },
});

export default NewsCard;
