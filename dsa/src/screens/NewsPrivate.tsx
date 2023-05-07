import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsPrivate = ({ route }) => {
  const { article } = route.params;
  const { title, urlToImage, publishedAt, source } = article;

  const options = { day: 'numeric', month: 'long' };
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', options);
  const [showPopup, setShowPopup] = useState(false);

  const handlePress = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Haberler" />
      <ScrollView>
        {article && (
          <>
            <View style={styles.infoContainer}>
              <Image source={{ uri: source?.logo }} style={styles.logo} resizeMode="contain" />
              <View style={styles.sourceInfo}>
                <Text style={styles.sourceName}>{source?.name}</Text>
                <Text style={styles.publishedAt}>{formattedDate}</Text>
              </View>
            </View>
            <Text style={styles.title}>{title}</Text>
            {urlToImage && (
              <Image source={{ uri: urlToImage }} style={styles.image} resizeMode="stretch" />
            )}
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.boxText}>NewsTag</Text>
              </View>
            </View>
            <Text style={styles.description}>{article.description}</Text>
            <TouchableOpacity onPress={handlePress}>
              <Image source={require('../images/alb+.png')} style={styles.albplus} />
            </TouchableOpacity>
            <Text style={styles.content}>{article.content}</Text>
            {showPopup && (
              <View style={styles.popupContainer}>
                <Text style={styles.popupText}>Bu özellik yapım aşamasında!</Text>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  sourceInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  sourceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  publishedAt: {
    fontSize: 12,
    color: '#666666',
  },
  image: {
    width: '100%',
    height: 313,
    marginBottom: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
  albplus: {
    width: '100%',
    height: 33,
    marginBottom: 16,
  },
  popupContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxContainer: {
    backgroundColor: '#603AF5',
    marginBottom: 16,
    width: 23,
    borderRadius: 4,
  },
  box: {
    width: 100,
    height: 25,
    borderRadius: 4,
    backgroundColor: '#603AF5',
  },
  boxText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  
  
});

export default NewsPrivate
