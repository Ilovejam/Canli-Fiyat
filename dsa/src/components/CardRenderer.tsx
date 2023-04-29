import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CurrencyCard from './CurrencyCard';
import axios from 'axios';

interface CurrencyCardData {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  marketCap: number;
  volume: number;
}

interface CurrencyCardRendererProps {
  activeCategory: string;
}

const CurrencyCardRenderer = ({ activeCategory }: CurrencyCardRendererProps) => {
  const [coinData, setCoinData] = useState<CurrencyCardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum,cardano,binancecoin,dogecoin,polkadot,solana,chainlink,uniswap,filecoin,litecoin,bitcoin-cash,aave,staked-ether,cosmos,theta-token,sushi,wrapped-bitcoin,tron,vechain,tezos,helium,matic-network,the-graph,huobi-token,near,algorand,fantom,terra-luna,compound-ether',
        },
      });
      const fetchedData = response.data.map((coin: any) => ({
        id: coin.id,
        icon: coin.image,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        change: coin.price_change_percentage_24h,
        marketCap: coin.market_cap,
        volume: coin.total_volume,
      }));
      setCoinData(fetchedData);
    };
    fetchData();
  }, []);

  const filteredCoinData = coinData
    .filter((coin) => activeCategory === 'Kazananlar' ? coin.change > 0 : activeCategory === 'Kaybedenler' ? coin.change < 0 : true)
    .slice(0, 10);

  const renderItem = ({ item }: { item: CurrencyCardData }) => (
    <CurrencyCard
      icon={item.icon}
      name={item.name}
      symbol={item.symbol}
      price={item.price}
      change={item.change}
      marketCap={item.marketCap}
      volume={item.volume}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCoinData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
