import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import io from 'socket.io-client';

const Temp = () => {
  const symbols = ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY"];
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 3000,
      auth: { token: 'Test' },
    });

    const handlePriceUpdate = (data) => {
      const symbol = data._i.replace('albfx-', '');
      if (symbols.includes(symbol)) {
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

    const fetchSymbolData = async () => {
      try {
        const response = await axios.get('https://gateway.alb.com/api/v2/Symbol/GetAll?isactive=true');
        const symbolDataMap = {};
        response.data.payload.forEach((symbol) => {
          if (symbols.includes(symbol.instrumentName)) {
            symbolDataMap[symbol.instrumentName] = symbol.open.toFixed(5);
          }
        });
        setPrices((prevPrices) => ({
          ...prevPrices,
          ...symbolDataMap,
        }));
      } catch (error) {
        console.log('Error fetching symbol data:', error);
      }
    };

    fetchSymbolData();

    return () => {
      socket.off('sendorder', handlePriceUpdate);
      socket.disconnect();
    };
  }, []);

  return (
    <View>
      {Object.entries(prices).map(([symbol, price]) => (
        <Text key={symbol}>{symbol}: {price}</Text>
      ))}
    </View>
  );
};

export default Temp;
