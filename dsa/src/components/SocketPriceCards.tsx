import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import io from 'socket.io-client';

const SocketPriceCards = ({ initialCategory, categories, activeCategory, selectedCategory }) => {
  const [prices, setPrices] = useState({});
  const [dailyChanges, setDailyChanges] = useState({});
  const [changeRateImages, setChangeRateImages] = useState({});
  const navigation = useNavigation();

  const handleCardPress = (symbol) => {
    navigation.navigate('MarketPrivate', { symbol });
  };

  const fetchDailyChanges = async (symbols) => {
    try {
      const response = await axios.get(`https://gateway.alb.com/api/v2/Symbol/GetAll?isactive=true`);
      const data = response.data.payload;

      const dailyChangesData = {};
      const changeRateImagesData = {};

      data.forEach((item) => {
        const symbol = item.name;
        if (symbols.includes(symbol)) {
          const dailyChange = item.dailyChange.toFixed(2);
          const description = item.description;
          dailyChangesData[symbol] = dailyChange;
          changeRateImagesData[symbol] = item.changeRateImageUrl;
        }
      });

      setDailyChanges(dailyChangesData);
      setChangeRateImages(changeRateImagesData);
    } catch (error) {
      console.log('Error fetching daily changes:', error);
    }
  };

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 3000,
      auth: { token: 'Test' },
    });

    const handlePriceUpdate = (data) => {
      const symbol = data._i.replace('albfx-', '');
      if (categories[selectedCategory].includes(symbol)) {
        setPrices((prevPrices) => ({
          ...prevPrices,
          [symbol]: data.b.toFixed(4),
        }));
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
  }, [selectedCategory]);

  const isWinning = (symbol) => {
    return dailyChanges[symbol] > 0;
  };

  const isLosing = (symbol) => {
    return dailyChanges[symbol] < 0;
  };

  useEffect(() => {
    fetchDailyChanges(categories[selectedCategory]);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      {categories[selectedCategory].map((symbol) => (
        (isWinning(symbol) && activeCategory === 'Kazananlar') ||
        (isLosing(symbol) && activeCategory === 'Kaybedenler') ||
        (activeCategory === 'Hepsi')
      ) ? (
        <TouchableOpacity
          key={symbol}
          style={styles.card}
          onPress={() => handleCardPress(symbol)}
        >
          <Text style={styles.symbol}>{symbol}</Text>
          {changeRateImages[symbol] && (
            <Image
              source={{ uri: changeRateImages[symbol] }}
              style={styles.changeRateImage}
            />
          )}
          <View style={styles.priceContainer}>
            <Text
              style={[
                styles.dailyChange,
                { color: activeCategory === 'Kazananlar' ? 'green' : 'red' },
              ]}
            >
              {dailyChanges[symbol]}
            </Text>
            <Text style={styles.price}>{prices[symbol] ? prices[symbol] : '-'}</Text>
          </View>
        </TouchableOpacity>
      ) : null)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -18,
    width: '110%',
    position: 'relative',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 8,
    color: 'rgba(21, 25, 53, 1)',
  },
  changeRateImage: {
    width: 40,
    height: 30,
    marginRight: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#282828',
  },
  dailyChange: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
    marginRight: 4,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  sectionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  selectedSectionButton: {
    backgroundColor: '#ddd',
  },
  sectionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  selectedSectionText: {
    color: 'black',
  },
});

export default SocketPriceCards;
