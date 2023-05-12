import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

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
          days: 0.1,
        },
      });
      const fetchedData = response.data.prices.map((data: any) => data[1]);
      setChartData(fetchedData);
    };
    fetchData();
  }, [name]);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MarketPrivate', { name, icon });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={{ uri: icon }} style={styles.icon} />

        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>({symbol.toUpperCase()} - USD)</Text>
        </View>

        <View style={styles.chartContainer}>
        <LineChart
          data={{ datasets: [{ data: chartData }] }}
          width={160}
          height={50}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            decimalPlaces: 0,
            color : () => change < 0 ? '#AE3F5A' : '#6DF0C1',
            style: {
              borderRadius: 10,
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
          <Text style={styles.price}>${price.toFixed(1)}</Text>
          <Text style={[styles.change, change < 0 ? styles.changeNegative : styles.changePositive]}>{change.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 3,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 25,
    height: 25,
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
    fontSize: 15,
    marginBottom: 2,
    color: 'rgba(21, 25, 53, 1)',
  },
  symbol: {
    fontSize: 11,
    marginBottom: 2,
    marginRight:-10,
    color: 'rgba(137, 139, 153, 1)',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#282828',
    
  },
  change: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  changePositive: {
    color: '#40A882',
  },
  changeNegative: {
    color: '#AE3F5A',
  },
});

export default CurrencyCard;