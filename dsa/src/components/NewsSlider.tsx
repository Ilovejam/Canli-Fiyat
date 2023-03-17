import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');
interface NewsSliderProps {
  style?: any;
  title: string;
  imageUrl: string;
}

const NewsSlider: React.FC<NewsSliderProps> = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: screenWidth *0.828205128,
      height: screenHeight *0.283175355, // Adjust height here
      justifyContent: 'flex-start', // Change from 'center' to 'flex-start'
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 0,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: '75%', // Change from '80%' to '100%'
      resizeMode: 'cover',
      borderRadius: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
    },
});


export default NewsSlider;
