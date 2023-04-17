import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ExchangeCard from './ExchangeCard';

const ExchangeCardSlider = () => {
  const data = [
    { name: 'ABC', change: '+0,00%' },
    { name: 'DEF', change: '-1,23%' },
    { name: 'GHI', change: '+4,56%' },
    { name: 'JKL', change: '-7,89%' },
    { name: 'MNO', change: '+1,23%' },
    { name: 'PQR', change: '-4,56%' },
    { name: 'STU', change: '+7,89%' },
    { name: 'VWX', change: '-2,34%' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map((item, index) => (
          <ExchangeCard key={index} name={item.name} change={item.change} />
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
