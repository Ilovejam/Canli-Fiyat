import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { moderateScale } from 'react-native-size-matters';


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
    padding: moderateScale(10),
    marginTop: moderateScale(-20),
  },
  socialMediaIcons: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
  },
  socialMediaIcon: {
    marginRight: moderateScale(10),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  logo: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(8),
  },
  sourceInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  sourceName: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  publishedAt: {
    fontSize: moderateScale(12),
    color: '#666666',
  },
  image: {
    width: '95%',
    alignSelf: 'center',
    height: moderateScale(200),
    marginBottom: moderateScale(16),
    borderRadius: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    marginBottom: moderateScale(8),
  },
  description: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  content: {
    fontSize: moderateScale(16),
  },
  albplus: {
    width: '100%',
    height: moderateScale(33),
    marginBottom: moderateScale(16),
  },
  popupContainer: {
    position: 'absolute',
    bottom: moderateScale(10),
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  popupText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  boxContainer: {
    backgroundColor: '#603AF5',
    marginBottom: moderateScale(16),
    width: moderateScale(23),
    borderRadius: moderateScale(4),
  },
  box: {
    width: moderateScale(100),
    height: moderateScale(25),
    borderRadius: moderateScale(4),
    backgroundColor: '#603AF5',
  },
  boxText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default NewsPrivate
