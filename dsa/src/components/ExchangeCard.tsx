import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { BlurView } from '@react-native-community/blur';

type ExchangeCardProps = {
  name: string;
  percentageChange: number;
  valueForOneTRY: string;
};

const ExchangeCard: React.FC<ExchangeCardProps> = ({ name, percentageChange, valueForOneTRY }) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const fetchedData = [];
    for (let i = 0; i < 30; i++) {
      fetchedData.push(Math.floor(Math.random() * 1000));
    }
    setChartData(fetchedData);
  }, []);

  return (
    <BlurView
      style={styles.card}
      blurType="light"
      blurAmount={10}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${valueForOneTRY}</Text>
      <Text style={styles.percentageChange}>+{percentageChange}%</Text>
      {chartData && (
        <View style={styles.chartContainer}>
          <LineChart
            data={{ datasets: [{ data: chartData }] }}
            width={180}
            height={40}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 0,
              color: () => 'rgba(109, 240, 193, 1)',
              style: {
                borderRadius: 100,
                backgroundColor: 'transparent',
                
              },
              propsForDots: {
                r: '4',
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
    </BlurView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    width: 110,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderImageSource: 'radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)', // note that this syntax is not supported by all platforms, and it may not work as expected
    borderImageSlice: 1,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 70,
    marginLeft: 10,
    marginBottom: 2,
  },
  name: {
    width: 80,
    fontSize: 10,
    textAlign: 'left',
  },
  price: {
    fontSize: 14,
    width: 80,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  percentageChange: {
    fontSize: 10,
    width: 80,
    textAlign: 'left',
    color: 'rgba(64, 168, 130, 1)',
    fontWeight: 'bold',
  },
});

export default ExchangeCard;
