import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import {Box} from 'native-base';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpcomingEvents from '../components/UpcomingEvents';
import io from 'socket.io-client';
import axios from 'axios';
import { Linking } from 'react-native';


const MarketPrivate = ({ route }) => {
  const [news, setNews] = useState([]);
  const [chartUrl, setChartUrl] = useState('');
  const [showAllNews, setShowAllNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [openPrice, setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');
  const [maxVolume, setMaxVolume] = useState('');
  const [high, setHigh] = useState('');

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 3000,
      auth: { token: 'Test' },
    });
  
  
    const handlePriceUpdate = (data) => {
      const symbol = data._i.replace('albfx-', '');
      if (symbol === route.params?.symbol) {
        const updatedPrice = data.b.toFixed(4);
        setPrice(updatedPrice);
      }
    };
    
    
    
    
  
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
      socket.emit('subscribe', '424B0B1C');
    });
  
    socket.on('sendorder', handlePriceUpdate);
  
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket');
    });
  
    return () => {
      socket.off('sendorder', handlePriceUpdate);
      socket.disconnect();
    };
  }, [route.params?.symbol]);
  

  useEffect(() => {
    fetchNews();
    if (route.params?.symbol) {
      fetchChartUrl(route.params.symbol);
    }
  }, [route.params?.symbol]);

  useEffect(() => {
    if (route.params?.symbol) {
      console.log('Symbol Name:', route.params.symbol);
    }
  }, [route.params?.symbol]);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get('https://widget.canlifiyat.com/news.php?category=all');
      setNews(response.data.data);
      const openPriceData = response.data;
      const openPrice = openPriceData.price;
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  }, []);

  const fetchChartUrl = async (symbol) => {
    try {
      const encodedSymbol = encodeURIComponent(symbol);
      const apiUrl = `https://www.tradingview.com/widgetembed/?symbol=${encodedSymbol}&interval=D&hideTopToolbar=1&hideLegend=1&hideSideToolbar=1&hidePoweredBy=1&saveimage=0&toolbarbg=transparent`;
      setChartUrl(apiUrl);
    } catch (error) {
      console.log(`Error fetching chart URL for ${symbol}:`, error);
    }
  };
  
  const handleNewsCardClick = (url) => {
    console.log('News URL:', url);
    Linking.openURL(url);

  };
  
  
  const renderNewsItems = useCallback(() => {
    const newsToRender = showAllNews ? news : news.slice(0, 8);
    return newsToRender.map((item, index) => {
      const newsData = JSON.parse(item.news_json);
      const truncatedDescription =
        newsData.description && newsData.description.length > 65
          ? newsData.description.substring(0, 65) + '...'
          : newsData.description;
      return (
        <TouchableOpacity
          key={`${item.news_unique_id}-${index}`}
          onPress={() => handleNewsCardClick(newsData.content)}
        >
          <View style={styles.newsItem}>
            <View style={styles.textContainer}>
              <Text style={styles.newsSource}>{newsData.source}</Text>
              <Text style={styles.newsTitle}>{newsData.header}</Text>
              {truncatedDescription && (
                <Text style={styles.newsDescription}>{truncatedDescription}</Text>
              )}
              <Text style={styles.newsSource}>{newsData.source}</Text>
              <Text style={styles.readTime}>
                {'Okuma Süresi ' + ' ' + Math.floor(Math.random() * 6) + 0 + ' dk'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../images/alb-news.png')} style={styles.newsImage} />
            </View>
          </View>
        </TouchableOpacity>
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
      <View style={styles.header}>
        <Header title={route.params.symbol} style={styles.header} />
        </View>
      <ScrollView>
       
      <View style={styles.priceTextContainer}>
        <Text style={styles.priceText}>{price}$</Text>
      </View>

        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor="rgba(252, 199, 212, 1)"
            opacity={0.5}
            p={1}
            borderRadius={4}
            width={60} // Adjust the width as needed
            marginRight={2} // Adjust the spacing between the boxes
          >
            <Text color="rgba(174, 63, 90, 1)" fontSize={10}>
              -1.23%
            </Text>
          </Box>
          <Box
            backgroundColor="#FCC7D4"
            p={1}
            
            borderRadius={4}
            width={60} // Adjust the width as needed
            marginLeft={2} // Adjust the spacing between the boxes
          >
            <Text color="#4EAD68" fontSize={10}>
              +1,19%
            </Text>
          </Box>
        </Box>

        <Text style={styles.lastUpdate}>Son veri tarihi 27 Haz 10:14</Text>

        <View style={styles.chartContainer}>
          {chartUrl ? (
            <WebView source={{ uri: chartUrl }} style={styles.chartWebView} />
          ) : (
            <ActivityIndicator size="large" color="#000" />
          )}
        </View>

        <Text style={styles.newsSecTitle}>Piyasa Özeti</Text>
        <View style={styles.priceContainer}>
            <View style={styles.asd}>
              <Text style={styles.priceTitle}>Açılış</Text>
              <Text style={styles.text123}>$123,456 B</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            
            <View style={styles.asd}>
              <Text style={styles.priceTitle}>24-Sa Değişim</Text>
              <Text style={styles.text123}>$123,456 B</Text>
            </View>
            <View style={styles.asd}>
              <Text style={styles.priceTitle}>Kapanış</Text>
              <Text style={styles.text123}>$123,456 B</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            
            <View style={styles.asd}>
              <Text style={styles.priceTitle}>Hacim (24Sa)</Text>
              <Text style={styles.text123}>$123,456 B</Text>
            </View>
            <View style={styles.asd}>
              <Text style={styles.priceTitle}>52-Ha Değişim</Text>
              <Text style={styles.text123}>$123,456 B</Text>
            </View>
          </View>
          




       

        <Text style={styles.newsSecTitle}>Ekonomik Takvim</Text>

        <View style={styles.eventsPart}>
          <UpcomingEvents />

        </View>
        <Text style={styles.newsSecTitle}>İlgili Haberler</Text>
        
          <ScrollView>
            {renderNewsItems()}
          </ScrollView>
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
    fontFamily: 'Popins-Regular',
  },
  eventsPart: {
    marginTop: -20,
    marginLeft: -18,
    marginBottom: -20,
  },
  readTime: {
    color : "#67BBF9",
    fontWeight: "bold", 
    fontSize:12, 
  },
  asd: {
    marginRight:20,
    marginLeft:-15,
    marginBottom:10
  
  }, 
  lastUpdate: {
    marginTop:10
  },

  updateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginLeft: -20 // Adjust the horizontal padding as needed
  },

  text123: {
    fontSize: 16, 
    color: '#191919',
    fontWeight: 'bold'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rightContainer: {
    alignItems: 'flex-end',
    marginTop:10
  },
  // priceContainer: {
  //   alignItems: 'center',
  //   marginBottom: 10,
  //   marginRight:12 // Adjust the vertical spacing between the price containers as needed
  // },
 
  priceValue: {
    fontSize: 12,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 16,
    marginTop: -10,
    
  },
  priceTextContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingTop: -16,
  },
  priceText: {
    fontSize: 30,
    color: '#603AF5',
    fontWeight: '900',
    fontFamily: 'Popins-Regular',
  },
  priceTitle: {
    fontSize: 18,
    marginRight: 8,
    marginBottom: 4,
    fontWeight: 'normal',
    textAlign: 'left',
    width: 180,
  
    color: 'gray',
    fontFamily: 'WorkSans-Medium',
  },
  priceValue: {
    fontSize: 18,
  },
  header: {
    backgroundColor: 'white',
    marginTop: -10,
    marginLeft: -16,
    elevation: 0,
    width: '110%',
  },
  chartContainer: {
    height: 400, // Adjust the height as per your requirement
    marginBottom: 16,
    marginTop: 16,
  },
  chartWebView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },

  newsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
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
    fontSize: 14,
    fontWeight: '600',
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
    marginTop:30,
    fontWeight: 'bold',
    marginBottom: 35,
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
