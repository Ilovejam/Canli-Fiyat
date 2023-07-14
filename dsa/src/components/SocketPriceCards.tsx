import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SvgUri from 'react-native-svg-uri';

import io from 'socket.io-client';

const SocketPriceCards = ({ initialCategory, categories, selectedFilter, symbols }) => {
  const [prices, setPrices] = useState({});
  const [dailyChanges, setDailyChanges] = useState({});
  const [instrumentNames, setInstrumentNames] = useState({});
  const [filteredSymbols, setFilteredSymbols] = useState([]);

  const fetchDailyChanges = async (symbols) => {
    try {
      const response = await axios.get(`https://gateway.alb.com/api/v2/Symbol/GetAll?isactive=true`);
      const data = response.data.payload;

      const dailyChangesData = {};
      const instrumentNamesData = {};

      data.forEach((item) => {
        const symbol = item.name;
        if (symbols.includes(symbol)) {
          const dailyChange = item.dailyChange.toFixed(2);
          const description = item.description;
          dailyChangesData[symbol] = dailyChange;
          instrumentNamesData[symbol] = item.instrumentName;
        }
      });

      setDailyChanges(dailyChangesData);
      setInstrumentNames(instrumentNamesData);
    } catch (error) {
      console.log('Error fetching daily changes:', error);
    }
  };

  useEffect(() => {
    fetchDailyChanges(categories[initialCategory]);
    setFilteredSymbols(categories[initialCategory]);
  }, [initialCategory]);

  useEffect(() => {
    if (selectedFilter === 'Hepsi') {
      setFilteredSymbols(categories[initialCategory]);
    } else if (selectedFilter === 'Kazananlar') {
      const symbols = categories[initialCategory].filter((symbol) => dailyChanges[symbol] > 0);
      setFilteredSymbols(symbols);
    } else if (selectedFilter === 'Kaybedenler') {
      const symbols = categories[initialCategory].filter((symbol) => dailyChanges[symbol] < 0);
      setFilteredSymbols(symbols);
    }
  }, [selectedFilter]);

  const navigation = useNavigation();

  const handleCardPress = (symbol) => {
    navigation.navigate('MarketPrivate', { symbol });
  };

  const formatPrice = (symbol) => {
    if (prices[symbol]) {
      return `$${Number(prices[symbol]).toFixed(3)}`;
    } else {
      return '-';
    }
  };

  const formatDailyChange = (change) => {
    if (change && change >= 0) {
      return `+${change}%`;
    } else {
      return `${change}%`;
    }
  };

  const getDailyChangeColor = (change) => {
    if (change && change < 0) {
      return '#AE3F5A'; // Negative change color
    } else if (change && change > 0) {
      return '#40A882'; // Positive change color
    } else {
      return '#282828'; // Default color
    }
  };

  const getPriceColor = () => '#282828';

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 3000,
      auth: { token: 'Test' },
    });

    const handlePriceUpdate = (data) => {
      const symbol = data._i.replace('albfx-', '');
      if (filteredSymbols.includes(symbol)) {
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
  }, [filteredSymbols]);

  const [symbolIcons, setSymbolIcons] = useState({});


  const fetchSymbolIcons = async (symbol) => {
    try {
      const response = await axios.get(`https://alb.com/assets/main/img/app-symbols/${symbol}.svg`, {
        responseType: 'arraybuffer',
      });
  
      const iconData = Buffer.from(response.data, 'binary').toString('base64');
      setSymbolIcons((prevIcons) => ({
        ...prevIcons,
        [symbol]: `data:image/svg+xml;base64,${iconData}`,
      }));
    } catch (error) {
      console.log('Error fetching symbol icon:', error);
    }
  };
  
  useEffect(() => {
    filteredSymbols.forEach((symbol) => {
      fetchSymbolIcons(symbol);
    });
  }, [filteredSymbols]);

  return (
    <View style={styles.container}>
      {filteredSymbols.map((symbol) => (
        <TouchableOpacity
          key={symbol}
          style={styles.card}
          onPress={() => handleCardPress(symbol)}
        >
<View style={styles.iconContainer}>
          {symbolIcons[symbol] ? (
            <Image source={{ uri: symbolIcons[symbol] }} style={styles.iconImage} />
          ) : (
            <Text></Text>
          )}
        </View>
        
          <View style={styles.contentContainer}>
            <View style={styles.wrapper}>
              <View style={styles.symbolContainer}>
                <Text style={styles.symbol}>{symbol}</Text>
                {instrumentNames[symbol] && (
                  <Text style={styles.instrumentName}>{instrumentNames[symbol]}</Text>
                )}
              </View>
            </View>
            <View style={styles.priceContainer}>
              {selectedFilter === 'Hepsi' && (
                <Text style={[styles.price, { color: getPriceColor() }]}>
                  {formatPrice(symbol)}
                </Text>
              )}
              <Text
                style={[styles.dailyChange, { color: getDailyChangeColor(dailyChanges[symbol]) }]}
              >
                {formatDailyChange(dailyChanges[symbol])}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    width: '100%',
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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orangeCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'orange',
    marginRight: 10, // Adjust the gap size here
  },
  symbolContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
  },
  symbol: {
    fontWeight: '500',
    fontSize: 15,
    color: 'rgba(21, 25, 53, 1)',
  },
  instrumentName: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'orange',
  },
  dailyChange: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
    marginRight: 4,
  },
});

export default SocketPriceCards;
