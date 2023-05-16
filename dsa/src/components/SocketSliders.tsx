import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import io from 'socket.io-client';
import { LineChart } from 'react-native-chart-kit';
import { BlurView } from '@react-native-community/blur';

const SocketSliders = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const socket = io('wss://pusher.alb.com/market', {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 10000,
      auth: { token: 'Test' },
    });

    const handlePriceUpdate = (data) => {
      // Handle the received data for "Borsa Endeksleri"
      // For simplicity, let's assume the data structure is { symbol, price }
      if (data.category === 'Borsa Endeksleri') {
        setData((prevData) => [...prevData, { symbol: data.symbol, price: data.price }]);
      }
    };

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
      socket.emit('subscribe', '424B0B1C');
    });

    socket.on('sendorder', handlePriceUpdate);

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket');
    });

    return () => {
      socket.off('sendorder', handlePriceUpdate);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView horizontal={true}>
          {data.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.symbol}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.percentageChange}>+0.00%</Text>
              </View>
              <View style={styles.chartContainer}>
                {/* Randomly generated graph */}
                <LineChart
                  data={{ datasets: [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }] }}
                  width={140}
                  height={40}
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
                    min: 0,
                    max: 10,
                  }}
                  bezier
                  withHorizontalLabels={false}
                  withVerticalLabels={false}
                  withDots={false}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      backgroundColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
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
      marginLeft: -2,
    },
    chartContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      marginRight: 50,
    },
    name: {
      marginTop: 4,
      marginLeft: -2,
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
      marginBottom: -19,
      textAlign: 'left',
      color: 'rgba(64, 168, 130, 1)',
      fontWeight: 'bold',
    },
  });
  
  export default SocketSliders;
