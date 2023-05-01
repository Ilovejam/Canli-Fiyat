import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

type ExchangeCardProps = {
  name: string;
  percentageChange: number;
};

const ExchangeCard: React.FC<ExchangeCardProps> = ({ name, percentageChange }) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const fetchedData = [];
    for (let i = 0; i < 30; i++) {
      fetchedData.push(Math.floor(Math.random() * 1000));
    }
    setChartData(fetchedData);
  }, []);

  return (
    <ImageBackground
      source={require('../images/exchangebg.png')}
      style={styles.card}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.percentageChange}>+{percentageChange}%</Text>
      {chartData && (
        <View style={styles.chartContainer}>
          <LineChart
            data={{ datasets: [{ data: chartData }] }}
            width={140}
            height={40}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,              
              decimalPlaces: 0,
              color: () => '#6DF0C1',
              style: {
                borderRadius: 100,
              },
              propsForDots: {
                r: '1',
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
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, // add space between cards
  },
  chartContainer: {    
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 60,
    marginLeft: 10
  },
  name: {
    width: 80,
    fontSize: 10,
    textAlign: 'left',
  },
  percentageChange: {
    fontSize: 13,
    width: 80,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ExchangeCard;
