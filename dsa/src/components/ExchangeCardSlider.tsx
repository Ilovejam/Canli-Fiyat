import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import ExchangeCard from './ExchangeCard';

const ExchangeCardSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      const API_KEY = 'dfbc7b4db95b7aa6dde777a7';
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/TRY`);
      const json = await response.json();
      const exchangeData = Object.entries(json.rates).map(([name, value]) => ({
        name,
        percentageChange: value,
        valueForOneTRY: (1 / value).toFixed(2),
      }));
      setData(exchangeData);
    };
    fetchExchangeData();
  }, []);

  const handleExchangeCardPress = (name: string) => {
    const baseUrl = 'https://www.example.com/exchanges/';
    const encodedName = encodeURIComponent(name);
    const url = `${baseUrl}${encodedName}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleExchangeCardPress(item.name)}>
            <ExchangeCard name={item.name} percentageChange={item.percentageChange} valueForOneTRY={item.valueForOneTRY} />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
});

export default ExchangeCardSlider;
