import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';

interface CurrencyCardProps {
  icon: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
}

const CurrencyCard = ({ icon, name, symbol, price, change }: CurrencyCardProps) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: 1,
        },
      });
      const fetchedData = response.data.prices.map((data: any) => data[1]);
      setChartData(fetchedData);
    };
    fetchData();
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />

      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.symbol}>({symbol.toUpperCase()})</Text>
      </View>

      <View style={styles.chartContainer}>
      <LineChart
        data={{ datasets: [{ data: chartData }] }}
        width={150}
        height={100}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 0,
          color: () => 'green',
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
          },
          propsForBackgroundLines: {
            stroke: 'transparent',
          },
        }}
        bezier
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withDots={false}
      />

      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={styles.change}>{change.toFixed(2)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  chartContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginLeft: 46,
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  symbol: {
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    fontSize: 17,
    marginBottom: 2,
    
  },
  change: {
    fontSize: 17,
  },
});

export default CurrencyCard;
