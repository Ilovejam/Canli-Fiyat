import React from 'react';
import { FlatList } from 'react-native';
import CurrencyCard from './CurrencyCard';

interface CurrencyCardData {
  icon: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
}

interface CurrencyCardRendererProps {
  data: CurrencyCardData[];
}

const CurrencyCardRenderer = ({ data }: CurrencyCardRendererProps) => {
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
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
    />
  );
};

export default CurrencyCardRenderer;
