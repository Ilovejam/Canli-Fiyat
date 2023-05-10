
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Box, VStack, HStack, Button} from 'native-base';

import PortfolioCard from '../components/PortfolioCard';
import ExchangeCardsSlider from '../components/ExchangeCardSlider';
import CurrencyCardRenderer from '../components/CardRenderer';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import MarketCategories from '../components/MarketCategories';
import WinLoseCategory from '../components/WinLoseCategory';


export default function MarketsScreen() {
  const [activeCategory, setActiveCategory] = useState('Overview');

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
    // Perform any other necessary actions here
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <Header title="Piyasalar" style={styles.header} />
      <MarketCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <View style={styles.portfolioContainer}>
        <PortfolioCard />
      </View>
      <View style={styles.exchangeContainer}>
        <ExchangeCardsSlider />
      </View>
      <WinLoseCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onCategoryPress={handleCategoryPress}
      />
      <View style={styles.currencyCardRenderer}>
        <CurrencyCardRenderer activeCategory={activeCategory} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },

  portfolioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -210,
    marginBottom: 20,
  },
  exchangeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
    marginBottom: -40,
  },
  currencyCardRenderer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
});
