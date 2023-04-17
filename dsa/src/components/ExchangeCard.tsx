import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box } from 'native-base';
import { LineChart } from 'react-native-chart-kit';

type ExchangeCardProps = {
  name: string;
  percentageChange: number;
};

const ExchangeCard: React.FC<ExchangeCardProps> = ({ name, percentageChange }) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    // Generate random chart data
    const fetchedData = [];
    for (let i = 0; i < 30; i++) {
      fetchedData.push(Math.floor(Math.random() * 1000));
    }
    setChartData(fetchedData);
  }, []);

  return (
    <Box style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.percentageChange}>+{percentageChange}%</Text>
      {chartData && (
        <View style={styles.chartContainer}>
          <LineChart
            data={{ datasets: [{ data: chartData }] }}
            width={120}
            height={60}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 0,
              color: () => 'green',
              style: {
                borderRadius: 100,
              },
              propsForDots: {
                r: '10',
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
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    left: 10,
  },
  chartContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
  name: {
    width: 80,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',

  },
  percentageChange: {
    fontSize: 13,
    width: 80,
    textAlign: 'left',
    color: '#00b300',
    fontWeight: 'bold',
  },
});

export default ExchangeCard;
