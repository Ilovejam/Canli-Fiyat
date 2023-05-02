import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';

const MarketPrivate = ({ route }) => {
  const [chartData, setChartData] = useState([]);
  const [range, setRange] = useState(1);
  const { name } = route.params;
  const [buyValue, setBuyValue] = useState(null);
  const [sellValue, setSellValue] = useState(null);
  const [news, setNews] = useState([]);

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: range,
        },
      });
      const fetchedData = response.data.prices.map((data) => data[1]);
      setChartData(fetchedData);
    };
    fetchData();
  }, [name, range]);

  useEffect(() => {
    const fetchBuySellValues = async () => {
      const response = await axios.get(`https://api.coinbase.com/v2/prices/BTC-USD/buy`);
      setBuyValue(response.data.data.amount);
      const response2 = await axios.get(`https://api.coinbase.com/v2/prices/BTC-USD/sell`);
      setSellValue(response2.data.data.amount);
    };
    fetchBuySellValues();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?categories=${name.toLowerCase()}`);
      setNews(response.data.Data);
    };
    fetchNews();
  }, []);

  const handleRangeChange = (range) => {
    setRange(range);
  };

  const dailyChange = chartData.length > 0 ? ((chartData[chartData.length - 1] - chartData[0]) / chartData[0]) * 100 : null;

  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>{name} Price Chart</Text>
        <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button, range === 1 && styles.activeButton]} onPress={() => handleRangeChange(1)}>
            <Text style={[styles.buttonText, range === 1 && styles.activeButtonText]}>1H</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, range === 4 && styles.activeButton]} onPress={() => handleRangeChange(4)}>
            <Text style={[styles.buttonText, range === 4 && styles.activeButtonText]}>4H</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, range === 24 && styles.activeButton]} onPress={() => handleRangeChange(24)}>
            <Text style={[styles.buttonText, range === 24 && styles.activeButtonText]}>1D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, range === 168 && styles.activeButton]} onPress={() => handleRangeChange(168)}>
            <Text style={[styles.buttonText, range === 168 && styles.activeButtonText]}>1W</Text>
            </TouchableOpacity>
        </View>
                <View style={{flex : 1}}> 
                <LineChart
                    data={{ datasets: [{ data: chartData }] }}
                    width={Dimensions.get('window').width - 32}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    withInnerLines={false}
                    withOuterLines={false}
                    style={{ marginVertical: 8 }}
                />
                {typeof dailyChange === 'number' && (
                    <View style={styles.footer}>
                        <View style={styles.footerItem}>
                        <Text style={styles.footerTitle}>24H Change</Text>
                        <Text style={styles.footerValue}>{dailyChange.toFixed(2)}%</Text>
                        </View>
                        <View style={styles.footerItem}>
                        <Text style={styles.footerTitle}>Open</Text>
                        <Text style={styles.footerValue}>
                            {chartData.length > 0 && typeof chartData[0] === 'number' ? chartData[0].toFixed(2) : ''}
                        </Text>
                        </View>
                        <View style={styles.footerItem}>
                        <Text style={styles.footerTitle}>Close</Text>
                        <Text style={styles.footerValue}>
                            {chartData.length > 0 && typeof chartData[chartData.length - 1] === 'number' ? chartData[chartData.length - 1].toFixed(2) : ''}
                        </Text>
                        </View>
                    </View>
                )}
                {buyValue !== null && sellValue !== null && (
                    <View style={styles.footer}>
                        <View style={[styles.footerItem, { flex: 1 }]}>
                        <Text style={styles.footerTitle}>Buy Now</Text>
                        <Text style={styles.footerValue}>${buyValue}</Text>
                        </View>
                        <View style={[styles.footerItem, { flex: 1 }]}>
                        <Text style={styles.footerTitle}>Sell Now</Text>
                        <Text style={styles.footerValue}>${sellValue}</Text>
                        </View>
                    </View>
                    )}
                {news.length > 0 && (
                    <View style={styles.newsContainer}>
                        <Text style={styles.newsTitle}>News</Text>
                        {news.map((article, index) => (
                        <View style={styles.newsItem} key={index}>
                            <View style={styles.newsTextContainer}>
                            <Text style={styles.newsTitleText}>{article.title}</Text>
                            <Text style={styles.newsDate}>{new Date(article.published_on * 1000).toLocaleString()}</Text>
                            </View>
                            <View style={styles.newsImageContainer}>
                            <Image style={styles.newsImage} source={{ uri: article['imageurl'] }} />
                            </View>
                        </View>
                        ))}
                    </View>
                    )}



                </View>
            </View>
        </ScrollView>
        );
      };      

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    button: {
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    activeButton: {
      backgroundColor: '#4CAF50',
    },
    activeButtonText: {
      color: '#fff',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
    },
    footerItem: {
      flex: 1,
      alignItems: 'center',
    },
    footerTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    footerValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    newsContainer: {
        marginTop: 16,
      },
      newsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      newsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      newsImageContainer: {
        marginRight: 16,
      },
      newsImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
      },
      newsTextContainer: {
        flex: 1,
      },
      newsText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      newsDate: {
        fontSize: 14,
        color: '#555',
      },
  });
  


export default MarketPrivate;