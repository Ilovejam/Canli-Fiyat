import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpcomingEvents from '../components/UpcomingEvents';

const MarketPrivate = ({ route }) => {
  const [news, setNews] = useState([]);
  const [chartUrl, setChartUrl] = useState('');
  const [showAllNews, setShowAllNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNews();
    if (route.params?.symbol) {
      fetchChartUrl(route.params.symbol);
    }
  }, [route.params?.symbol]);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get('https://widget.canlifiyat.com/news.php?category=all');
      setNews(response.data.data);
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  }, []);

  const fetchChartUrl = async (symbol) => {
    try {
      const encodedSymbol = encodeURIComponent(symbol);
      const apiUrl = `https://www.tradingview.com/widgetembed/?symbol=${encodedSymbol}&interval=D&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=BB%40tv-basicstudies&theme=light&style=1&timezone=exchange&withdateranges=1&hide_side_toolbar=1&hide_legend=1&hideideas=1&hideideasbutton=1&hidesettings=1&hide_volume=1&showpopupbutton=1&enable_publishing=0`;
      setChartUrl(apiUrl);
    } catch (error) {
      console.log(`Error fetching chart URL for ${symbol}:`, error);
    }
  };

  const renderNewsItems = useCallback(() => {
    const newsToRender = showAllNews ? news : news.slice(0, 8);
    return newsToRender.map((item, index) => {
      const newsData = JSON.parse(item.news_json);
      const truncatedDescription = newsData.description && newsData.description.length > 65
        ? newsData.description.substring(0, 65) + '...' 
        : newsData.description;
      return (
        <View key={`${item.news_unique_id}-${index}`} style={styles.newsItem}>
          <View style={styles.textContainer}>
            <Text style={styles.newsTitle}>{newsData.header}</Text>
            {truncatedDescription && (
              <Text style={styles.newsDescription}>{truncatedDescription}</Text>
            )}
            <Text style={styles.newsSource}>{newsData.source}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../images/alb-news.png')} style={styles.newsImage} />
          </View>
        </View>
      );
    });
  }, [news, showAllNews]);

  const handleShowMoreNews = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAllNews(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <ScrollView>
        <View style={styles.header}>
          <Header title="Piyasalar" style={styles.header} />
        </View>
        <View style={styles.chartContainer}>
          {chartUrl ? (
            <WebView source={{ uri: chartUrl }} style={styles.chartWebView} />
          ) : (
            <Text>Loading chart...</Text>
          )}
        </View>
        <Text style={styles.newsSecTitle}>Yaklaşan Etkinlikler</Text>
        <UpcomingEvents />
        <Text style={styles.newsSecTitle}>İlgili Haberler</Text>
        <View>
          {renderNewsItems()}
        </View>
        {!showAllNews && news.length > 8 && (
          <TouchableOpacity
            style={styles.showMoreButton}
            onPress={handleShowMoreNews}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.showMoreButtonText}>Daha fazla haber göster</Text>
            )}
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    fontFamily: 'Worksans-Black',
  },
  header: {
    backgroundColor: '#fff',
    marginTop: -10,
    marginLeft: -16,
    elevation: 0,
  },
  chartContainer: {
    height: 300,
    marginBottom: 16,
  },
  chartWebView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  newsItem: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 8,
  },
  newsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 13,
    marginBottom: 4,
  },
  newsSource: {
    fontSize: 12,
    color: 'gray',
  },
  newsSecTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Worksans-Black',
  },
  showMoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 8,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  showMoreButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MarketPrivate;
