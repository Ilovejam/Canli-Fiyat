import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const SYMBOL_LIST = ["albfx-EURUSD", "albfx-GBPUSD", "albfx-DXY", "albfx-XAUUSD", "albfx-GOOGLE", "albfx-AMAZON"];

const PricesScreen = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 3500,
      auth: { token: 'Test' },
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
      socket.emit('subscribe', '424B0B1C');
    });

    socket.on('sendorder', (data) => {
      const symbol = data._i.replace('albfx-', '');
      if (SYMBOL_LIST.includes(data._i)) {
        setPrices(prevPrices => {
          const newPrices = { ...prevPrices };
          newPrices[symbol] = data.b.toFixed(4);
          return newPrices;
        });
      }
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket');
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <View style={styles.container}>
      {SYMBOL_LIST.map((symbol) => (
        <View style={styles.priceRow} key={symbol}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.price}>{prices[symbol.replace('albfx-', '')] || '-'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
});

export default PricesScreen;
