import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import CurrencyCard from './CurrencyCard';
import axios from 'axios';

interface CurrencyCardData {
  icon: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
}

const CurrencyCardRenderer = () => {
  const [coinData, setCoinData] = useState<CurrencyCardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum,cardano',
        },
      });
      const fetchedData = response.data.map((coin: any) => ({
        icon: coin.image,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        change: coin.price_change_percentage_24h,
      }));
      setCoinData(fetchedData);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: CurrencyCardData }) => (
    <CurrencyCard
      icon={item.icon}
      name={item.name}
      symbol={item.symbol}
      price={item.price}
      change={item.change}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={coinData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default CurrencyCardRenderer;
