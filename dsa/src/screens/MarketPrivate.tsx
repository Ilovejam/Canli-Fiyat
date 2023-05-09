import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarketHeader from '../components/MarketHeader';
import { useNavigation } from '@react-navigation/native';
import MarketPrivateCategory from '../components/MarketPrivateCategory';
import UpcomingEvents from '../components/UpcomingEvents';

const MarketPrivate = ({ route }) => {
  const [chartData, setChartData] = useState([]);
  const [range, setRange] = useState(1);
  const { name, icon } = route.params;
  const [buyValue, setBuyValue] = useState(null);
  const [sellValue, setSellValue] = useState(null);
  const [news, setNews] = useState([]);

    const navigation = useNavigation();


  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 10,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    yAxisSuffix: '$',
    yAxisInterval: 1,
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
      const coingeckoResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}`);
      const symbol = coingeckoResponse.data.symbol.toUpperCase();
      const response = await axios.get(`https://api.coinbase.com/v2/prices/${symbol}-USD/buy`);
      setBuyValue(response.data.data.amount);
      const response2 = await axios.get(`https://api.coinbase.com/v2/prices/${symbol}-USD/sell`);
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

  const dailyChange = chartData.length > 0 ? ((chartData[chartData.length - 1] - chartData[0]) / chartData[0]) * 100 : 0;
  const dailyChangeValue = ((buyValue*dailyChange)/100).toFixed(2);
  return (
    <SafeAreaView>
        <ScrollView>
            <BackgroundCircles />
            <MarketHeader name={name} icon={icon} />
            <MarketPrivateCategory />
            <View style={styles.container}>
            <Text style={styles.currentValue}>${buyValue}</Text>
            <View style={styles.dailyChangeView}>
              <Text style={dailyChange < 0 ? styles.negativeChangeText : styles.positiveChangeText}>
                {dailyChangeValue}%
              </Text>              
              <Text style={dailyChange <0 ? styles.dailyNegativeChangeViewValue : styles.dailyPositiveChangeViewValue }>{dailyChange.toFixed(2)}%</Text>
            </View>

            <View style={styles.buttonGroup}>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={[styles.button, range === 1 && styles.activeButton]} onPress={() => handleRangeChange(1)}>
                    <Text style={[styles.buttonText, range === 1 && styles.activeButtonText]}>1Sa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 4 && styles.activeButton]} onPress={() => handleRangeChange(4)}>
                    <Text style={[styles.buttonText, range === 4 && styles.activeButtonText]}>4Sa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 12 && styles.activeButton]} onPress={() => handleRangeChange(12)}>
                    <Text style={[styles.buttonText, range === 12 && styles.activeButtonText]}>12Sa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 24 && styles.activeButton]} onPress={() => handleRangeChange(24)}>
                    <Text style={[styles.buttonText, range === 24 && styles.activeButtonText]}>1Gün</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 72 && styles.activeButton]} onPress={() => handleRangeChange(72)}>
                    <Text style={[styles.buttonText, range === 72 && styles.activeButtonText]}>3Gün</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 168 && styles.activeButton]} onPress={() => handleRangeChange(168)}>
                    <Text style={[styles.buttonText, range === 168 && styles.activeButtonText]}>1Ha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 720 && styles.activeButton]} onPress={() => handleRangeChange(720)}>
                    <Text style={[styles.buttonText, range === 720 && styles.activeButtonText]}>1Ay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, range === 2160 && styles.activeButton]} onPress={() => handleRangeChange(2160)}>
                    <Text style={[styles.buttonText, range === 2160 && styles.activeButtonText]}>3Ay</Text>
                </TouchableOpacity>
                </View>

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
                        <TouchableOpacity>
                            <Image source={require('../images/alb+.png')} style={styles.albplus} />
                        </TouchableOpacity>
                        <Text style={styles.summarTitle}>Piyasa Özeti</Text>
                        {typeof dailyChange === 'number' && (
                          <View style={styles.footer}>
                            <View style={styles.footerItem}>
                              <Text style={styles.footerTitle}>Açılış</Text>
                              <Text style={styles.footerValue}>
                                {chartData.length > 0 && typeof chartData[0] === 'number' ? chartData[0].toFixed(2) : ''}
                              </Text>
                            </View>
                          </View>
                        )}
                        {typeof dailyChange === 'number' && (
                          <View style={styles.footer}>
                            <View style={styles.footerItem}>
                              <Text style={styles.footerTitle}>24-Sa Değişim</Text>
                              <Text style={[styles.footerValue, dailyChange < 0 ? styles.negativeDailyChangeValue : styles.positiveDailyChangeValue]}>
                                {dailyChange.toFixed(2)}%
                              </Text>
                            </View>
                            <View style={styles.footerItem}>
                              <Text style={styles.footerTitle}>Kapanış</Text>
                              <Text style={styles.footerValue}>
                                {chartData.length > 0 && typeof chartData[chartData.length - 1] === 'number' ? chartData[chartData.length - 1].toFixed(2) : ''}
                              </Text>
                            </View>
                          </View>
                        )}
                        {buyValue !== null && sellValue !== null && (
                            <View style={styles.footer}>
                                <View style={[styles.footerItem, { flex: 1 }]}>
                                <Text style={styles.footerTitle}>Alış</Text>
                                <Text style={styles.footerValue}>${buyValue}</Text>
                                </View>
                                <View style={[styles.footerItem, { flex: 1 }]}>
                                <Text style={styles.footerTitle}>Satış</Text>
                                <Text style={styles.footerValue}>${sellValue}</Text>
                                </View>
                            </View>
                        )}
                        <Text style={styles.sectionTitle}>Yaklaşan Etkinlikler</Text>
                        <View style={styles.eventsContainer}>
                          <UpcomingEvents />
                        </View>
                    {news.length > 0 && (
                        <View style={styles.newsContainer}>
                            <Text style={styles.newsTitle}>İlgili Haberler</Text>
                            {news.map((article, index) => (
                                <TouchableOpacity onPress={() => navigation.navigate('NewsURL', { url: article.url })} key={index}>
                                <View style={styles.newsItem}>
                                    <View style={styles.newsTextContainer}>
                                    <Text style={styles.newsTitleText}>{article.title}</Text>
                                    <Text style={styles.newsDate}>{new Date(article.published_on * 1000).toLocaleString()}</Text>
                                    </View>
                                    <View style={styles.newsImageContainer}>
                                        <Image style={styles.newsImage} source={{ uri: article['imageurl'] }} />
                                    </View>
                                </View>
                                <View style={styles.newsDiv}/>

                                </TouchableOpacity>
                            ))}

                        </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
      };      

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
      fontFamily: 'Worksans-Black',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: -10,
        fontFamily: 'Worksans-Black',
      },
    
    dailyChangeView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 90,
      height: 26,
      marginTop: -15,
      marginBottom: 10,
    },
    dailyChangeText: {
      color: 'black',
      paddingRight: -6,
    },
    dailyNegativeChangeViewValue: {
      color: '#AE3F5A',
      fontWeight: 'bold',
      fontSize: 12,
      backgroundColor: '#FCC7D4',
      padding: 4,
      marginLeft: 15,
    },
    dailyPositiveChangeViewValue: {
      color: '#40A882',
      fontWeight: 'bold',
      fontSize: 12,
      backgroundColor: '#FCC7D4',
      padding: 4,
      marginLeft: 15,
    },
    negativeChangeText: {
      color: '#40A882',
    },
    positiveChangeText: {
      color: '#40A882',
    },
    
    newsDiv: {
        height: 2,
        marginBottom: 10,
        backgroundColor: '#DEE4F1',
    },
    summarTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        fontFamily: 'Worksans-Black',
    },
    newsTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    albplus: {
        width: '100%',
        height: 33,
        marginBottom: 16,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 8,
    },      
    currentValue: {
        color: '#603AF5',
        fontSize: 35,
        fontWeight: '900',
        lineHeight: 40,
        marginBottom: 16,
        marginTop: 5,
      },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
      height: 32,
    },
    button: {
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#7A7B7D',
    },
    activeButton: {
      backgroundColor: '#603AF5',
    },
    activeButtonText: {
      color: '#fff',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    footerItem: {
      flex: 1,
    },
    footerTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#7A7B7D',
    },
    footerValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    newsContainer: {
        marginTop: 30,
        backgroundColor: 'transparent',
      },
      newsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        fontFamily: 'Worksans-Black',
      },
      newsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
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