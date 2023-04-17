import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ExchangeCard from './ExchangeCard';

const ExchangeCardSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      const API_KEY = 'dfbc7b4db95b7aa6dde777a7';
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
      const json = await response.json();
      const exchangeData = Object.entries(json.rates).map(([name, value]) => ({ name, percentageChange: value }));
      setData(exchangeData);
    };
    fetchExchangeData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map((item, index) => (
          <ExchangeCard key={index} name={item.name} percentageChange={item.percentageChange} />
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
    paddingVertical: 20,
  },
});

export default ExchangeCardSlider;
