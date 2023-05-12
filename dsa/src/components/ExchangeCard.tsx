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
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];
        for (let i = 2; i < 10; i++) {
          fetchedData.push(Math.floor(Math.random() * 10));
        }
        setChartData(fetchedData);
        setDataFetched(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {dataFetched && (
        <BlurView style={styles.card} blurType="light" blurAmount={10}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${valueForOneTRY}</Text>
            <Text style={styles.percentageChange}>+{percentageChange}%</Text>
          </View>
          <View style={styles.chartContainer}>
          <LineChart
              data={{ datasets: [{ data: chartData }] }}
              width={140} // Adjust the width as needed
              height={40} // Adjust the height as needed
              chartConfig={{
                backgroundGradientFrom: 'transparent',
                backgroundGradientTo: 'transparent',
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                decimalPlaces: 0,
                color: () => 'rgba(109, 240, 193, 1)',
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '2',
                },
                propsForBackgroundLines: {
                  stroke: 'transparent',
                },
                min: Math.min(...chartData) - 0, // Lower the minimum value by 1
                max: Math.max(...chartData) + 1, // Increase the maximum value by 1
              }}
              bezier
              withHorizontalLabels={false}
              withVerticalLabels={false}
              withDots={false}
            />
          </View>
        </BlurView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },

  textContainer: {
    marginLeft:-2
  },
  
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginRight: 50
  },
  name: {
    marginTop:4,
    marginLeft:-2,
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
    marginBottom:-19,
    textAlign: 'left',
    color: 'rgba(64, 168, 130, 1)',
    fontWeight: 'bold',
  },
});

export default ExchangeCard;
