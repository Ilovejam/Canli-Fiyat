import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import axios from 'axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const CoinStats: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page: 1,
        },
      });
      setCoins(response.data);
    };

    fetchCoins();
  }, []);

  const renderCoin = (coin: Coin) => {
    const priceChangeColor = coin.price_change_percentage_24h >= 0 ? '#00C853' : '#FF1744';

    return (
      <ListItem key={coin.id} bottomDivider>
        <Icon name="circle" type="font-awesome" color={priceChangeColor} />
        <ListItem.Content>
          <ListItem.Title>{coin.name}</ListItem.Title>
          <ListItem.Subtitle>{coin.symbol.toUpperCase()}</ListItem.Subtitle>
        </ListItem.Content>
        <Text>${coin.current_price.toFixed(2)}</Text>
        <Text style={{ color: priceChangeColor }}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </ListItem>
    );
  };

  return (
    <ScrollView>
      <View>
        {coins.map(renderCoin)}
      </View>
    </ScrollView>
  );
};

export default CoinStats;
