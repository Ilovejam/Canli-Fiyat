import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import MarketPrivate from '../screens/MarketPrivate';


const SocketPriceCards = ({ selectedCategory, categories }) => {
  const [prices, setPrices] = useState({});
  const [chartData, setChartData] = useState({});
  const navigation = useNavigation();

  const handleCardPress = (symbol) => {
    navigation.navigate('MarketPrivate', { symbol });
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
        setPrices((prevPrices) => {
          const newPrices = { ...prevPrices };
          newPrices[symbol] = data.b.toFixed(4);
          return newPrices;
        });
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

  useEffect(() => {
    const generateRandomGraph = (symbol) => {
      const randomData = [];
      for (let i = 0; i < 10; i++) {
        randomData.push(Math.floor(Math.random() * 10));
      }
      setChartData((prevChartData) => ({
        ...prevChartData,
        [symbol]: randomData,
      }));
    };

    categories[selectedCategory].forEach((symbol) => {
      generateRandomGraph(symbol);
    });
  }, [categories, selectedCategory]);

  const renderGraph = (symbol) => {
    const data = chartData[symbol];
    if (data) {
      const color = data[0] > data[data.length - 1] ? '#F05F82' : '#6DF0C1';
      const chartConfig = {
        backgroundGradientFrom: 'transparent',
        backgroundGradientTo: 'transparent',
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        decimalPlaces: 0,
        color: () => color, // Update this line
        style: {
          borderRadius: 10,
        },
        propsForDots: {
          r: '2',
        },
        propsForBackgroundLines: {
          stroke: 'transparent',
        },
        min: Math.min(...data) - 0,
        max: Math.max(...data) + 1,
      };
      return (
        <View style={styles.chartContainer}>
          <LineChart
            data={{ datasets: [{ data }] }}
            width={140}
            height={40}
            chartConfig={chartConfig}
            bezier
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withDots={false}
          />
        </View>
      );
    }
    return null;
  };
  
  return (
    <View style={styles.container}>
      {categories[selectedCategory].map((symbol) => (
        <TouchableOpacity
          key={symbol}
          style={styles.card}
          onPress={() => handleCardPress(symbol)}
        >
          <View style={styles.cardLeft}>
            <Text style={styles.symbol}>{symbol}</Text>
            {renderGraph(symbol)}
          </View>
          <Text style={styles.price}>{prices[symbol] || '-'}</Text>
        </TouchableOpacity>
      ))}
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
    cardLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    symbol: {
      fontWeight: 'bold',
      fontSize: 15,
      marginRight: 8,
      color: 'rgba(21, 25, 53, 1)',
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#282828',
    },
    chartContainer: {
        alignItems: 'center',
        marginLeft: 0, // Add this line to center the graph horizontally
    },
  });
  
  export default SocketPriceCards;
  